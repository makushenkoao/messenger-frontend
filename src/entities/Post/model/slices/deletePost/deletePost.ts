import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const deletePost = createAsyncThunk<any, string, ThunkConfig<string>>(
    'posts/create',
    async (id, ThunkApi) => {
        const { rejectWithValue, extra } = ThunkApi;
        try {
            const { data } = await extra.api.delete<any>('/posts', {
                params: { id },
            });

            console.log(data);

            return data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    },
);
