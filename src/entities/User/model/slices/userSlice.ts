import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserPayload } from '../types/user';
import { UserSchema } from '../types/userSchema';

import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';
import { login } from '../services/login/login';
import { register } from '../services/register/register';
import { initAuthData } from '../services/initAuthData/initAuthData';
import { updateProfile } from '../services/updateProfile/updateProfile';

const initialState: UserSchema = {
    _mounted: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, { payload }: PayloadAction<UserPayload>) => {
            state.data = payload.user;
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, payload.token);
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
                (state, action: PayloadAction<UserPayload>) => {
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
            .addCase(updateProfile.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                updateProfile.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(updateProfile.rejected, (state, action) => {
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
            });
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
