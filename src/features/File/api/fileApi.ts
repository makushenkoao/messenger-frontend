import { rtkApi } from '@/shared/api/rtkApi';

import { bufferToBase64 } from '../lib/bufferToBase64/bufferToBase64';
import { DownloadFilePayload } from '../model/types/file';

export const fileApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        downloadFileURLById: build.query<string, string>({
            query: (id) => ({
                url: `/files/download/${id}`,
            }),
            transformResponse: (response: DownloadFilePayload) => {
                return bufferToBase64(response.data, {
                    returnDataURL: true,
                });
            },
        }),
    }),
});

export const downloadFileURLByIdQuery =
    fileApi.endpoints.downloadFileURLById.initiate;

export const { useDownloadFileURLByIdQuery } = fileApi;
