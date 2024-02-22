import { Setting, User } from '../model/types/user';

import { rtkApi } from '@/shared/api/rtkApi';

interface UpdateSettingsArgs {
    id: string;
    confidentiality: Setting;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserDataById: build.query<User, string>({
            query: (userId) => {
                return {
                    url: `/users/${userId}`,
                    method: 'GET',
                };
            },
        }),
        getUserDataByUserName: build.query<User, string>({
            query: (userName) => {
                return {
                    url: `/users/username/${userName}`,
                    method: 'GET',
                };
            },
        }),
        getUserRecommendations: build.query<User[], string>({
            query: (id) => {
                return {
                    url: `/users/recommendations/${id}`,
                    method: 'GET',
                };
            },
        }),
        updateSettings: build.mutation<User[], UpdateSettingsArgs>({
            query: ({ id, confidentiality }) => {
                return {
                    url: `/users/${id}/settings`,
                    method: 'PUT',
                    body: confidentiality,
                };
            },
        }),
    }),
});

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
export const {
    useGetUserDataByUserNameQuery,
    useGetUserRecommendationsQuery,
    useGetUserDataByIdQuery,
    useUpdateSettingsMutation,
} = userApi;
