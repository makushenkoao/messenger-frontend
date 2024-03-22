import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LoginPayload } from '@/features/Auth';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

import { initAuthData } from '../services/initAuthData/initAuthData';
import { resetPassword } from '../services/resetPassword/resetPassword';
import { User } from '../types/user';
import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
    _mounted: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, { payload }: PayloadAction<LoginPayload>) => {
            state.data = payload.user;
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, payload.accessToken);
        },
        logout: (state) => {
            state.data = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(
                initAuthData.fulfilled,
                (state, { payload }: PayloadAction<User>) => {
                    state.data = payload;
                    state._mounted = true;
                },
            )
            .addCase(initAuthData.rejected, (state) => {
                state._mounted = true;
            })
            .addCase(resetPassword.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(resetPassword.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
