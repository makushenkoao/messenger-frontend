import { StateSchema } from '@/app/providers/StoreProvider';

export const getAuthLoading = (state: StateSchema) => state.auth.isLoading;
export const getAuthError = (state: StateSchema) => state.auth.error;
