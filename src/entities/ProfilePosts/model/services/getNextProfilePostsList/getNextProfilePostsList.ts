import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

// import {
//     getProfilePostsHasMore,
//     getProfilePostsLoading,
//     getProfilePostsSkip,
// } from '../../selectors/profilePosts';
// import { profilePostsActions } from '../../slices/profilePostsSlice';
// import { getProfilePostsList } from '../getProfilePostsList/getProfilePostsList';

export const getNextProfilePostsList = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('profile/getNextProfilePostsList', async (_, ThunkApi) => {
    // const { getState, dispatch } = ThunkApi;
    // const hasMore = getProfilePostsHasMore(getState());
    // const skip = getProfilePostsSkip(getState());
    // const isLoading = getProfilePostsLoading(getState());
    //
    // if (hasMore && !isLoading) {
    //     dispatch(profilePostsActions.setSkip(skip + 9));
    //     dispatch(getProfilePostsList({}));
    // }
});
