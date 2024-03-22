import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { User } from '../../types/user';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkApi) => {
        const { rejectWithValue, extra } = thunkApi;

        try {
            const { data } = await extra.api.get<User>('/users');

            return data;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    },
);
