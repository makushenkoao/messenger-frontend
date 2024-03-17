import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

import { resetPassword } from '../..';
import { login } from '../services/auth/login';
import { register } from '../services/auth/register';
import { initAuthData } from '../services/initAuthData/initAuthData';
import { LoginPayload, User } from '../types/user';
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
            .addCase(login.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                login.fulfilled,
                (state, action: PayloadAction<LoginPayload>) => {
                    state.isLoading = false;
                    state.data = action.payload.user;
                },
            )
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(register.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
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
