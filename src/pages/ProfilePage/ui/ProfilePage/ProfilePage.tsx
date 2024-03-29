import { MdMoreHoriz, MdSettings } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import AvatarImage from '@/shared/assets/images/avatar.png';
import PostImage from '@/shared/assets/images/post-image-1.png';
import {
    getRouteArchives,
    getRouteMessages,
    getRoutePostDetails,
    getRouteSettings,
} from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';

import { useProfileModals } from '../lib/useProfileModals/useProfileModals';
import { ProfileFollowers } from '../modals/ProfileFollowers/ProfileFollowers';
import { ProfileFollowing } from '../modals/ProfileFollowing/ProfileFollowing';
import { ProfileMoreModal } from '../modals/ProfileMoreModal/ProfileMoreModal';
import { ProfileSettingsModal } from '../modals/ProfileSettingsModal/ProfileSettingsModal';

import cls from './ProfilePage.module.scss';

const ProfilePage = () => {
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
    } = useProfileModals();

    const navigate = useNavigate();

    const handleFollow = () => {
        console.log('Follow to Profile');
    };

    const handleNavigateToPostDetails = () => {
        navigate(getRoutePostDetails('post-id-here'));
    };

    return (
        <Page>
            <VStack
                max
                gap="64"
            >
                <HStack
                    max
                    justify="center"
                    align="start"
                    gap="64"
                >
                    <Avatar
                        src={AvatarImage}
                        width={150}
                        height={150}
                    />
                    <VStack gap="16">
                        <HStack gap="16">
                            <Text
                                text="makushenkoao"
                                bold
                            />
                            {isCurrentUser ? (
                                <>
                                    <Button
                                        onClick={() =>
                                            navigate(getRouteSettings('edit'))
                                        }
                                    >
                                        Edit Profile
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            navigate(getRouteArchives())
                                        }
                                    >
                                        View Archive
                                    </Button>
                                    <Icon
                                        svg={MdSettings}
                                        className={cls.settingIcon}
                                        clickable
                                        onClick={handleOpenSettings}
                                    />
                                </>
                            ) : (
                                <>
                                    <Button onClick={handleFollow}>
                                        Follow
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            navigate(getRouteMessages())
                                        }
                                    >
                                        Message
                                    </Button>
                                    <Icon
                                        svg={MdMoreHoriz}
                                        className={cls.settingIcon}
                                        clickable
                                        onClick={handleOpenMore}
                                    />
                                </>
                            )}
                        </HStack>
                        <HStack gap="16">
                            <Text text="2 posts" />
                            <Button
                                onClick={handleOpenFollowers}
                                variant="clear"
                            >
                                2 followers
                            </Button>
                            <Button
                                onClick={handleOpenFollowing}
                                variant="clear"
                            >
                                2 following
                            </Button>
                        </HStack>
                        <VStack gap="0">
                            <Text
                                text="Name"
                                size="s"
                            />
                            <Text
                                text="Profile Bio"
                                size="s"
                            />
                            <Text
                                text="Account was created on December 30, 2023"
                                size="s"
                            />
                        </VStack>
                    </VStack>
                </HStack>
                <VStack
                    className={cls.postWrapper}
                    gap="16"
                    max
                >
                    <HStack
                        max
                        justify="center"
                    >
                        <Text text="Posts" />
                    </HStack>
                    <HStack
                        max
                        gap="8"
                        wrap="wrap"
                        justify="center"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                            <AppImage
                                onClick={handleNavigateToPostDetails}
                                key={item}
                                src={PostImage}
                                className={cls.post}
                                width={300}
                                height={300}
                            />
                        ))}
                    </HStack>
                </VStack>
            </VStack>
            <ProfileMoreModal
                isOpen={isOpenMore}
                onClose={handleCloseMore}
            />
            <ProfileSettingsModal
                isOpen={isOpenSettings}
                onClose={handleCloseSettings}
            />
            <ProfileFollowers
                isOpen={isOpenFollowers}
                onClose={handleCloseFollowers}
            />
            <ProfileFollowing
                isOpen={isOpenFollowing}
                onClose={handleCloseFollowing}
            />
        </Page>
    );
};
export default ProfilePage;
