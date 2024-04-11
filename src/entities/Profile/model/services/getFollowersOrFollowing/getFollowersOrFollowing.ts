import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Profile } from '../../types/profile';

export const getFollowersOrFollowing = createAsyncThunk<
    any,
    string[],
    ThunkConfig<string>
>('posts/getPostById', async (ids, ThunkApi) => {
    const { rejectWithValue, extra } = ThunkApi;

    try {
        const promises = ids.map((id) =>
            extra.api.get<Profile>(`/users/${id}`),
        );

        const responses = await Promise.all(promises);

        const users = responses.map((response) => response.data);

        return users;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
