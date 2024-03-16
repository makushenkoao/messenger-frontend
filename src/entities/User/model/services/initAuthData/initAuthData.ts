import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { initUserQuery } from '../../../api/userApi';
import { User } from '../../types/user';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        try {
            const response = await dispatch(initUserQuery()).unwrap();

            return response;
        } catch (e) {
            return rejectWithValue(e.response.data.message);
        }
    },
);
