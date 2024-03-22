import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const deletePost = createAsyncThunk<void, string, ThunkConfig<string>>(
    'posts/delete',
    // eslint-disable-next-line
    async (id, ThunkApi) => {
        const { rejectWithValue, extra } = ThunkApi;
        try {
            await extra.api.delete(`/posts/${id}`);
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    },
);
