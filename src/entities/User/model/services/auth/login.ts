import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { userActions } from '../../slices/userSlice';
import { LoginPayload } from '../../types/user';

interface LoginProps {
    email: string;
    password: string;
}

export const login = createAsyncThunk<
    LoginPayload,
    LoginProps,
    ThunkConfig<string>
>('auth/login', async (authData, ThunkApi) => {
    const { rejectWithValue, dispatch, extra } = ThunkApi;
    try {
        const { data } = await extra.api.post<LoginPayload>('/auth/login', {
            password: authData.password,
            login: authData.email,
        });

        dispatch(userActions.setAuthData(data));

        return data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
