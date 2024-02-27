import { MdSettings, MdMoreHoriz } from 'react-icons/md';
import { useState } from 'react';
import { Page } from '@/widgets/Page';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { AppImage } from '@/shared/ui/AppImage';
import { ProfileMoreModal } from './modals/ProfileMoreModal/ProfileMoreModal';
import { ProfileSettingsModal } from './modals/ProfileSettingsModal/ProfileSettingsModal';
import PostImage from '@/shared/assets/images/image-post.png';
import AvatarImage from '@/shared/assets/images/avatar.png';
import cls from './ProfilePage.module.scss';
import { ProfileFollowers } from './modals/ProfileFollowers/ProfileFollowers';
import { ProfileFollowing } from './modals/ProfileFollowing/ProfileFollowing';

const ProfilePage = () => {
    const [isOpenFollowers, setIsOpenFollowers] = useState(false);
    const [isOpenFollowing, setIsOpenFollowing] = useState(false);
    const [isOpenMore, setIsOpenMore] = useState(false);
    const [isOpenSettings, setIsOpenSettings] = useState(false);

    const isCurrentUser = true;

    const handleOpenSettings = () => setIsOpenSettings(true);
    const handleCloseSettings = () => setIsOpenSettings(false);
    const handleOpenMore = () => setIsOpenMore(true);
    const handleCloseMore = () => setIsOpenMore(false);
    const handleOpenFollowers = () => setIsOpenFollowers(true);
    const handleCloseFollowers = () => setIsOpenFollowers(false);
    const handleOpenFollowing = () => setIsOpenFollowing(true);
    const handleCloseFollowing = () => setIsOpenFollowing(false);

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
                                    <Button>Edit Profile</Button>
                                    <Button>View Archive</Button>
                                    <Icon
                                        svg={MdSettings}
                                        className={cls.settingIcon}
                                        clickable
                                        onClick={handleOpenSettings}
                                    />
                                </>
                            ) : (
                                <>
                                    <Button>Follow</Button>
                                    <Button>Message</Button>
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
                                text="Profile Type"
                                size="s"
                            />
                            <Text
                                text="Profile Bio"
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
