import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getProfile, profileReducer } from '@/entities/Profile';
import {
    getProfilePostsList,
    profilePostsReducer,
} from '@/entities/ProfilePosts';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { ProfileCard } from '../ProfileCard/ProfileCard';

const reducers: ReducersList = {
    profile: profileReducer,
    profilePosts: profilePostsReducer,
};

const ProfilePage = () => {
    const dispatch = useAppDispatch();
    const { nickname } = useParams();

    useEffect(() => {
        dispatch(getProfile(nickname));
        dispatch(
            getProfilePostsList([
                '6616853d419b1ed3bf3bec4d',
                '6616853d419b1ed3bf3bec4d',
                '6616853d419b1ed3bf3bec4d',
                '6616853d419b1ed3bf3bec4d',
                '6616853d419b1ed3bf3bec4d',
                '6616853d419b1ed3bf3bec4d',
            ]),
        );
    }, []);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <ProfileCard />
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
