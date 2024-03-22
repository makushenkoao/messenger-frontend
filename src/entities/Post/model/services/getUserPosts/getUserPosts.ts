import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Post } from '../../types/post';

export const getUserPosts = createAsyncThunk<Post[], void, ThunkConfig<string>>(
    'posts/postById',
    async (_, ThunkApi) => {
        const { rejectWithValue, extra } = ThunkApi;

        try {
            const { data } = await extra.api.get<Post[]>('/posts', {
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
