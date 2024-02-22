import { createAsyncThunk } from '@reduxjs/toolkit';

import { getUserAuthData } from '../../selectors/user';
import { User } from '../../types/user';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const addRemoveFriend = createAsyncThunk<
    User,
    string,
    ThunkConfig<string>
>('users/addRemoveFriend', async (id, ThunkApi) => {
    const { rejectWithValue, extra, getState } = ThunkApi;
    const user = getUserAuthData(getState());

    try {
        const { data } = await extra.api.patch<User>(
            `/users/${user._id}/${id}`,
        );

        if (!data) throw new Error();

        return data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
