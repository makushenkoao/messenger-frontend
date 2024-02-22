import { createAsyncThunk } from '@reduxjs/toolkit';

import { userActions } from '../../../index';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { UserPayload } from '../../types/user';

interface LoginProps {
    email: string;
    password: string;
}

export const login = createAsyncThunk<
    UserPayload,
    LoginProps,
    ThunkConfig<string>
>('auth/login', async (authData, ThunkApi) => {
    const { rejectWithValue, dispatch, extra } = ThunkApi;
    try {
        const { data } = await extra.api.post<UserPayload>(
            '/auth/login',
            authData,
        );

        if (!data) throw new Error();

        dispatch(userActions.setAuthData(data));

        return data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
