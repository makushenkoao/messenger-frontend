import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

interface CreatePostArgs {
    title: string;
    text: string;
    photos?: File[];
}

export const createPost = createAsyncThunk<
    any,
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

        const { data } = await extra.api.post<any>('/posts', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
