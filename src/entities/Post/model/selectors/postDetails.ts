import { StateSchema } from '@/app/providers/StoreProvider';

export const getPostDetailsData = (state: StateSchema) =>
    state.postDetails?.data;
export const getPostDetailsLoading = (state: StateSchema) =>
    state.postDetails?.loading || false;
export const getPostDetailsError = (state: StateSchema) =>
    state.postDetails?.error;
