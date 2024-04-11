import { rtkApi } from '@/shared/api/rtkApi';

import { User } from '../model/types/user';

export const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserDataById: build.query<User, string>({
            query: (id) => ({
                url: `/users/${id}`,
            }),
        }),
        getUserDataByUsername: build.query<User, string>({
            query: (username) => ({
                url: `/users/${username}`,
            }),
        }),
    }),
});

export const { useGetUserDataByIdQuery, useGetUserDataByUsernameQuery } =
    userApi;
