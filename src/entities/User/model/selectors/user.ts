import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema) => state.user.data;
export const getUserLoading = (state: StateSchema) => state.user.isLoading;
export const getUserError = (state: StateSchema) => state.user.error;
export const getUserMounted = (state: StateSchema) => state.user._mounted;
