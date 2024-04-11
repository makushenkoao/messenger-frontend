import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfilePostsLoading = (state: StateSchema) =>
    state.profilePosts?.loading || false;
export const getProfilePostsError = (state: StateSchema) =>
    state.profilePosts?.error;
export const getProfilePostsData = (state: StateSchema) =>
    state.profilePosts?.data;
