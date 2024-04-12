import { useSelector } from 'react-redux';

import {
    getProfileData,
    getProfileError,
    getProfileLoading,
} from '@/entities/Profile';
import {
    getProfilePostsData,
    getProfilePostsError,
    getProfilePostsLoading,
} from '@/entities/ProfilePosts';
import { VStack } from '@/shared/ui/Stack';
import { NotFoundDataPage } from '@/widgets/NotFoundDataPage';
import { Page } from '@/widgets/Page';

import { useProfileModals } from '../../lib/useProfileModals/useProfileModals';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ProfileModals from '../ProfileModals/ProfileModals';
import { ProfilePageSkeleton } from '../ProfilePageSkeleton/ProfilePageSkeleton';
import { ProfilePostsList } from '../ProfilePostsInfinityList/ProfilePostsList';

export const ProfileCard = () => {
    const {
        isOpenFollowing,
        isOpenSettings,
        isOpenMore,
        isCurrentUser,
        isOpenFollowers,
        handleCloseFollowing,
        handleCloseSettings,
        handleCloseMore,
        handleOpenFollowers,
        handleOpenSettings,
        handleCloseFollowers,
        handleOpenMore,
        handleOpenFollowing,
        handleFollow,
    } = useProfileModals();

    const profile = useSelector(getProfileData);
    const posts = useSelector(getProfilePostsData);
    const profileLoading = useSelector(getProfileLoading);
    const postsLoading = useSelector(getProfilePostsLoading);
    const profileError = useSelector(getProfileError);
    const postError = useSelector(getProfilePostsError);

    if (profileLoading || postsLoading) {
        return <ProfilePageSkeleton />;
    }

    if (profileError || postError || !profile || !posts.length) {
        return <NotFoundDataPage />;
    }

    return (
        <Page>
            <VStack
                max
                gap="64"
                align="center"
                justify="center"
            >
                <ProfileInfo
                    handleFollow={handleFollow}
                    handleOpenFollowers={handleOpenFollowers}
                    handleOpenFollowing={handleOpenFollowing}
                    handleOpenSettings={handleOpenSettings}
                    isCurrentUser={isCurrentUser}
                    handleOpenMore={handleOpenMore}
                />
                <ProfilePostsList />
            </VStack>
            <ProfileModals
                isOpenMore={isOpenMore}
                isOpenSettings={isOpenSettings}
                isOpenFollowers={isOpenFollowers}
                isOpenFollowing={isOpenFollowing}
                handleCloseMore={handleCloseMore}
                handleCloseSettings={handleCloseSettings}
                handleCloseFollowers={handleCloseFollowers}
                handleCloseFollowing={handleCloseFollowing}
            />
        </Page>
    );
};
