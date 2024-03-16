import { createAsyncThunk } from '@reduxjs/toolkit';

import { User } from '../../..';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface RegisterProps {
    nickname: string;
    password: string;
    email: string;
    avatar: File;
}

export const register = createAsyncThunk<
    User,
    RegisterProps,
    ThunkConfig<string>
>('auth/register', async (authData, ThunkApi) => {
    const { rejectWithValue, extra } = ThunkApi;
    try {
        const formData = new FormData();

        formData.append('nickname', authData.nickname);
        formData.append('password', authData.password);
        formData.append('email', authData.email);
        formData.append('avatar', authData.avatar);

        const { data } = await extra.api.post<User>('/auth/register', formData);

        return data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
