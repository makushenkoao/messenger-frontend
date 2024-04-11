import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

// import { getProfilePostsInited } from '../../selectors/profilePosts';
// import { profilePostsActions } from '../../slices/profilePostsSlice';
// import { getProfilePostsList } from '../getProfilePostsList/getProfilePostsList';

export const initProfilePosts = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>('profilePosts/initProfilePosts', async (_, ThunkApi) => {
    // const { getState, dispatch } = ThunkApi;
    // const inited = getProfilePostsInited(getState());
    // if (!inited) {
    // dispatch(profilePostsActions.initState());
    // dispatch(getProfilePostsList({}));
    // }
});
