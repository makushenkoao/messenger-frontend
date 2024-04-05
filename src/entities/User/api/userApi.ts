import { rtkApi } from '@/shared/api/rtkApi';

import { User } from '../model/types/user';

export const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserDataById: build.query<User, string>({
            query: (id) => ({
                url: `/files/download/${id}`,
            }),
        }),
        getUserDataByUsername: build.query<User, string>({
            query: (id) => ({
                url: `/files/download/${id}`,
            }),
        }),
    }),
});

export const { useGetUserDataByIdQuery, useGetUserDataByUsernameQuery } =
    userApi;
