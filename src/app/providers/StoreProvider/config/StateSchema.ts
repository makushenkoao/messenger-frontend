import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { PostDetailsSchema } from '@/entities/Post';
import { ProfileSchema } from '@/entities/Profile';
import { ProfilePostsSchema } from '@/entities/ProfilePosts';
import { UserSchema } from '@/entities/User';
import { AuthSchema } from '@/features/Auth';
import { UISchema } from '@/features/UI';
import { PostsSchema } from '@/pages/HomePage';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
    user: UserSchema;
    auth: AuthSchema;
    ui: UISchema;
    postDetails?: PostDetailsSchema;
    posts?: PostsSchema;
    profilePosts?: ProfilePostsSchema;
    profile: ProfileSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface reducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: reducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
