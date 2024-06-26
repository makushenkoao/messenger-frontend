import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Post } from '../..';
import { getPostById } from '../services/getPostById/getPostById';
import { PostDetailsSchema } from '../types/postDetailsSchema';

const initialState: PostDetailsSchema = {
    data: undefined,
};

export const postDetailsSlice = createSlice({
    name: 'postDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPostById.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(
                getPostById.fulfilled,
                (state, action: PayloadAction<Post>) => {
                    state.loading = false;
                    state.data = action.payload;
                },
            )
            .addCase(getPostById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: postDetailsActions } = postDetailsSlice;
export const { reducer: postDetailsReducer } = postDetailsSlice;
