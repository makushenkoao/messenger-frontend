import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Post } from '@/entities/Post';

import { getPostsLimit, getPostsSkip } from '../../selectors/posts';

interface getPostsListArgs {
    replace?: boolean;
}

export const getPostsList = createAsyncThunk<
    Post[],
    getPostsListArgs,
    ThunkConfig<string>
>('posts/getPostsList', async (_, ThunkApi) => {
    const { rejectWithValue, extra, getState } = ThunkApi;
    const limit = getPostsLimit(getState());
    const skip = getPostsSkip(getState());

    try {
        const { data } = await extra.api.get<Post[]>('/posts', {
            params: {
                limit,
                skip,
            },
        });

        return data;
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
