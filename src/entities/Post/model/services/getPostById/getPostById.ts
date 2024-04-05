import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Post } from '../../types/post';

export const getPostById = createAsyncThunk<Post, string, ThunkConfig<string>>(
    'posts/getPostById',
    async (id, ThunkApi) => {
        const { rejectWithValue, extra } = ThunkApi;

        try {
            const { data } = await extra.api.get<Post>(`/posts/${id}`);

            return data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    },
);
