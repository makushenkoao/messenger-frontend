import { MdSettings, MdMoreHoriz } from 'react-icons/md';
import { Page } from '@/widgets/Page';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import PostImage from '@/shared/assets/images/image-post.png';
import AvatarImage from '@/shared/assets/images/avatar.png';
import cls from './ProfilePage.module.scss';
import { AppImage } from '@/shared/ui/AppImage';

const ProfilePage = () => {
    const isCurrentUser = false;

    const handleOpenSettings = () => {
        console.log('Opened Settings');
    };

    const handleOpenMore = () => {
        console.log('Opened More');
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
                                    <Button>Edit Profile</Button>
                                    <Button>View Archive</Button>
                                    <Icon
                                        svg={MdMoreHoriz}
                                        className={cls.settingIcon}
                                        clickable
                                        onClick={handleOpenMore}
                                    />
                                </>
                            ) : (
                                <>
                                    <Button>Follow</Button>
                                    <Button>Message</Button>
                                    <Icon
                                        svg={MdSettings}
                                        className={cls.settingIcon}
                                        clickable
                                        onClick={handleOpenSettings}
                                    />
                                </>
                            )}
                        </HStack>
                        <HStack gap="16">
                            <Text text="2 posts" />
                            <Button variant="clear">2 followers</Button>
                            <Button variant="clear">2 following</Button>
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
        </Page>
    );
};
export default ProfilePage;
