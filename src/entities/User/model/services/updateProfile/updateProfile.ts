import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '../../../index';

interface registerProps {
    _id: string;
    firstName: string;
    lastName: string;
    userName: string;
    location: string;
    occupation: string;
    picture?: File;
    picturePath: string;
}

export const updateProfile = createAsyncThunk<
    User,
    registerProps,
    ThunkConfig<string>
>('users/updateProfile', async (userData, ThunkApi) => {
    const { rejectWithValue, extra } = ThunkApi;

    try {
        const formData = new FormData();

        // eslint-disable-next-line no-restricted-syntax
        for (const [key, value] of Object.entries(userData)) {
            if (key === 'picturePath') {
                formData.append('picturePath', value);
            } else {
                formData.append(key, value);
            }
        }

        const { data } = await extra.api.patch<User>(
            `/users/${userData._id}`,
            formData,
        );

        if (!data) throw new Error();

        return data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
