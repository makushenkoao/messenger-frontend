import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

export const getUserPosts = createAsyncThunk<any, void, ThunkConfig<string>>(
    'posts/postById',
    async (_, ThunkApi) => {
        const { rejectWithValue, extra } = ThunkApi;

        try {
            const { data } = await extra.api.get<any>('/posts', {
                params: {
                    // limit: '',
                    // skip: '',
                },
            });

            return data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    },
);
