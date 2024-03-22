import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const getPostById = createAsyncThunk<any, string, ThunkConfig<string>>(
    'posts/postById',
    async (id, ThunkApi) => {
        const { rejectWithValue, extra } = ThunkApi;

        try {
            const { data } = await extra.api.get<any>(`/posts/${id}`);

            return data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    },
);
