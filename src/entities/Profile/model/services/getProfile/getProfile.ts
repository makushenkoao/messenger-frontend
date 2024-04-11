import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Profile } from '../../types/profile';

export const getProfile = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
>('posts/getPostById', async (nickname, ThunkApi) => {
    const { rejectWithValue, extra } = ThunkApi;

    try {
        const { data } = await extra.api.get<Profile>(
            `/users/nickname/${nickname}`,
        );

        return data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
