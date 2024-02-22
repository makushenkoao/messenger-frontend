import { createAsyncThunk } from '@reduxjs/toolkit';

// import { jwtDecode } from 'jwt-decode';
// import { getUserDataByIdQuery } from '../../../api/userApi';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '../../types/user';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import {getUserDataByIdQuery} from '../../../api/userApi';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY);

        if (!token) {
            return rejectWithValue('');
        }

        try {
            // const decodedToken: {
            //     iat?: number;
            //     id?: string;
            // } = jwtDecode(token);
            //
            const response = await dispatch(
                // getUserDataByIdQuery(decodedToken.id),
                getUserDataByIdQuery('token'),
            ).unwrap();

            return response;
        } catch (e) {
            return rejectWithValue('');
        }
    },
);
