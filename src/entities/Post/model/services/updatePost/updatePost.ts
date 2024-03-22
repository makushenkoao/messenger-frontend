import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Post } from '../../types/post';

interface UpdatePostArgs {
    id: string;
    title: string;
    text: string;
}

export const updatePost = createAsyncThunk<
    Post,
    UpdatePostArgs,
    ThunkConfig<string>
>('posts/update', async (newData, ThunkApi) => {
    const { rejectWithValue, extra } = ThunkApi;

    try {
        const { data } = await extra.api.patch<Post>(`/posts/${newData.id}`, {
            title: newData.title,
            text: newData.text,
        });

        return data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
