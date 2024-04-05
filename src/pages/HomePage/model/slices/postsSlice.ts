import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';

import { StateSchema } from '@/app/providers/StoreProvider';
import { Post } from '@/entities/Post';

import { getPostsList } from '../services/getPostsList/getPostsList';
import { PostsSchema } from '../types/postsSchema';

const postsAdapter = createEntityAdapter<Post>({
    selectId: (article) => article._id,
});

export const getPosts = postsAdapter.getSelectors<StateSchema>(
    (state) => state.posts || postsAdapter.getInitialState(),
);

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: postsAdapter.getInitialState<PostsSchema>({
        loading: false,
        error: undefined,
        ids: [],
        entities: {},
        skip: 9,
        limit: 9,
        hasMore: true,
        _inited: false,
    }),
    reducers: {
        setSkip: (state, action: PayloadAction<number>) => {
            state.skip = action.payload;
        },
        initState: (state) => {
            state.limit = 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPostsList.pending, (state, action) => {
                state.error = undefined;
                state.loading = true;

                if (action.meta.arg.replace) {
                    postsAdapter.removeAll(state);
                }
            })
            .addCase(getPostsList.fulfilled, (state, action) => {
                state.loading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    postsAdapter.setAll(state, action.payload);
                } else {
                    postsAdapter.addMany(state, action.payload);
                }
            })
            .addCase(getPostsList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: postsReducer, actions: postsActions } = postsSlice;
