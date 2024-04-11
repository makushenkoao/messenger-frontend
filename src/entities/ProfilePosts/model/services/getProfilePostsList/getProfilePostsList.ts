// import { createAsyncThunk } from '@reduxjs/toolkit';
//
// import { ThunkConfig } from '@/app/providers/StoreProvider';
// import { Post } from '@/entities/Post';
//
// import {
//     getProfilePostsLimit,
//     getProfilePostsSkip,
// } from '../../selectors/profilePosts';
//
// interface getPostsListArgs {
//     replace?: boolean;
// }
//
// export const getProfilePostsList = createAsyncThunk<
//     Post[],
//     getPostsListArgs,
//     ThunkConfig<string>
// >('profile/getProfilePostsList', async (_, ThunkApi) => {
//     const { rejectWithValue, extra, getState } = ThunkApi;
//     const limit = getProfilePostsLimit(getState());
//     const skip = getProfilePostsSkip(getState());
//
//     try {
//         const { data } = await extra.api.get<Post[]>('/posts', {
//             params: {
//                 limit,
//                 skip,
//             },
//         });
//
//         return data;
//     } catch (e) {
//         return rejectWithValue(e.response.data.message);
//     }
// });

import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Post } from '@/entities/Post';

export const getProfilePostsList = createAsyncThunk<
    Post[],
    string[],
    ThunkConfig<string>
>('profile/getProfilePostsList', async (ids, ThunkApi) => {
    const { rejectWithValue, extra } = ThunkApi;

    try {
        const postsPromises = ids.map((id) =>
            extra.api.get<Post>(`/posts/${id}`),
        );
        const posts = await Promise.all(postsPromises);
        return posts.map((response) => response.data);
    } catch (e) {
        return rejectWithValue(e.response.data.message);
    }
});
