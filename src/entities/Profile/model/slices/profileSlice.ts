import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getProfile } from '../services/getProfile/getProfile';
import { Profile } from '../types/profile';
import { ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
    data: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProfile.pending, (state) => {
                state.error = undefined;
                state.loading = true;
            })
            .addCase(
                getProfile.fulfilled,
                (state, action: PayloadAction<Profile>) => {
                    state.loading = false;
                    state.error = undefined;
                    state.data = action.payload;
                },
            )
            .addCase(getProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
