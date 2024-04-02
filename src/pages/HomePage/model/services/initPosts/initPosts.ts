import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { getPostsInited } from '../../selectors/posts';
import { postsActions } from '../../slices/postsSlice';
import { getPostsList } from '../getPostsList/getPostsList';

export const initPosts = createAsyncThunk<void, void, ThunkConfig<string>>(
    'posts/initPosts',
    async (_, ThunkApi) => {
        const { getState, dispatch } = ThunkApi;
        const inited = getPostsInited(getState());

        if (!inited) {
            dispatch(postsActions.initState());
            dispatch(getPostsList({}));
        }
    },
);
