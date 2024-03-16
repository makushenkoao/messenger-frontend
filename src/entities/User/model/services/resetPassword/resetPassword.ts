import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { LoginPayload } from '../../types/user';

export const resetPassword = createAsyncThunk<
    LoginPayload,
    string,
    ThunkConfig<string>
>('auth/resetPassword', async (newPassword, ThunkApi) => {
    const { rejectWithValue, extra } = ThunkApi;
    try {
        const { data } = await extra.api.patch<LoginPayload>(
            '/auth/reset-password',
            { newPassword },
        );

        return data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
