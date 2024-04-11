import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Post } from '@/entities/Post';

import { getProfilePostsList } from '../services/getProfilePostsList/getProfilePostsList';
import { ProfilePostsSchema } from '../types/profilePostsSchema';

const initialState: ProfilePostsSchema = {
    data: undefined,
};

export const profilePostsSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfilePostsList.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(
                getProfilePostsList.fulfilled,
                (state, action: PayloadAction<Post[]>) => {
                    state.loading = false;
                    state.error = undefined;
                    state.data = action.payload;
                },
            )
            .addCase(getProfilePostsList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profilePostsActions } = profilePostsSlice;
export const { reducer: profilePostsReducer } = profilePostsSlice;
