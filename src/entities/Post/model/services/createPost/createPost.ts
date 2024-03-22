import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Post } from '../../types/post';

interface CreatePostArgs {
    title: string;
    text: string;
    photos?: File[];
}

// 65fdb5e95a8312681080cd9f

export const createPost = createAsyncThunk<
    Post,
    CreatePostArgs,
    ThunkConfig<string>
>('posts/create', async (newPost, ThunkApi) => {
    const { rejectWithValue, extra } = ThunkApi;
    try {
        const formData = new FormData();
        formData.append('title', newPost.title);
        formData.append('text', newPost.text);
        if (newPost.photos) {
            newPost.photos.forEach((photo) => {
                formData.append('photos', photo);
            });
        }

        const { data } = await extra.api.post<Post>('/posts', formData);

        console.log(data);

        return data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
