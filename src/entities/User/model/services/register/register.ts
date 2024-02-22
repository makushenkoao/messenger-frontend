import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { UserPayload } from '../../types/user';

interface registerProps {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    userName: string;
}

export const register = createAsyncThunk<
    UserPayload,
    registerProps,
    ThunkConfig<string>
>('auth/register', async (registerData, ThunkApi) => {
    const { rejectWithValue, extra } = ThunkApi;

    try {
        const { data } = await extra.api.post<UserPayload>(
            '/auth/register',
            registerData,
        );

        if (!data) throw new Error();

        return data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
