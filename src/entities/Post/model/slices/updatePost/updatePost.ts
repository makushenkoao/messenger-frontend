import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

interface UpdatePostArgs {
    id: string;
    title: string;
    text: string;
}

export const updatePost = createAsyncThunk<
    any,
    UpdatePostArgs,
    ThunkConfig<string>
>('posts/create', async (newData, ThunkApi) => {
    const { rejectWithValue, extra } = ThunkApi;

    try {
        const { data } = await extra.api.patch<any>(`/posts/${newData.id}`, {
            title: newData.title,
            text: newData.text,
        });

        console.log(data);

        return data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
