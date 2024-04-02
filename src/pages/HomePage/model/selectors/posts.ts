import { StateSchema } from '@/app/providers/StoreProvider';

export const getPostsLoading = (state: StateSchema) =>
    state.posts?.loading || false;
export const getPostsError = (state: StateSchema) => state.posts?.error;
export const getPostsInited = (state: StateSchema) => state.posts?._inited;
export const getPostsSkip = (state: StateSchema) => state.posts?.skip || 0;
export const getPostsLimit = (state: StateSchema) => state.posts?.limit || 9;
export const getPostsHasMore = (state: StateSchema) => state.posts?.hasMore;
