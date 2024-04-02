import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import {
    getPostsHasMore,
    getPostsLoading,
    getPostsSkip,
} from '../../selectors/posts';
import { postsActions } from '../../slices/postsSlice';
import { getPostsList } from '../getPostsList/getPostsList';

export const getNextPostsList = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('posts/getNextPostsList', async (_, ThunkApi) => {
    const { getState, dispatch } = ThunkApi;
    const hasMore = getPostsHasMore(getState());
    const skip = getPostsSkip(getState());
    const isLoading = getPostsLoading(getState());

    if (hasMore && !isLoading) {
        dispatch(postsActions.setSkip(skip + 9));
        dispatch(getPostsList({}));
    }
});
