import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserAuthData, User } from '../../../index';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const saveUnSavePost = createAsyncThunk<
    User,
    string,
    ThunkConfig<string>
>('users/saveUnSavePost', async (postId, ThunkApi) => {
    const { rejectWithValue, extra, getState } = ThunkApi;
    const user = getUserAuthData(getState());

    try {
        const { data } = await extra.api.patch<User>(
            `/users/${user._id}/savePost/${postId}`,
        );

        if (!data) throw new Error();

        return data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
