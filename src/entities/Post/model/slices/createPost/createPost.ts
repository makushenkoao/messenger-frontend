import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

interface CreatePostArgs {
    title: string;
    text: string;
}

export const createPost = createAsyncThunk<
    any,
    CreatePostArgs,
    ThunkConfig<string>
>('posts/create', async (newPost, ThunkApi) => {
    const { rejectWithValue, extra } = ThunkApi;
    try {
        const { data } = await extra.api.post<any>('/posts', newPost);

        console.log(data);

        return data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
