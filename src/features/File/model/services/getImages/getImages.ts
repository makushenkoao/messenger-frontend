import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Photo } from '@/entities/Post';

import { downloadFileURLByIdQuery } from '../../../api/fileApi';

export const getImages = createAsyncThunk<
    string | string[],
    Photo[] | undefined,
    ThunkConfig<string>
>('files/getImage', async (photos, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    try {
        if (!photos) {
            return rejectWithValue('No photos found');
        }

        if (!photos.length) {
            return 'no-images';
        }

        if (photos.length > 1) {
            const imagePromises = photos.map((photo) =>
                dispatch(downloadFileURLByIdQuery(photo.id)).unwrap(),
            );

            return await Promise.all(imagePromises);
        }

        return await dispatch(downloadFileURLByIdQuery(photos[0].id)).unwrap();
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
