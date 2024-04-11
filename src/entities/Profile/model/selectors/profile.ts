import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileData = (state: StateSchema) => state.profile?.data;
export const getProfileLoading = (state: StateSchema) => state.profile?.loading;
export const getProfileError = (state: StateSchema) => state.profile?.error;
