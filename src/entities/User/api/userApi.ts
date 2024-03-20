import { rtkApi } from '@/shared/api/rtkApi';

import { User } from '../model/types/user';

interface UpdateSettingsArgs {
    id: string;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        initUser: build.query<User, void>({
            query: () => {
                return {
                    url: '/users',
                    method: 'GET',
                };
            },
        }),
    }),
});

export const initUserQuery = userApi.endpoints.initUser.initiate;
export const {} = userApi;
