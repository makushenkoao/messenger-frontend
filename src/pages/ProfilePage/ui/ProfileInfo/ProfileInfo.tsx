import { MdMoreHoriz, MdSettings } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getProfileData } from '@/entities/Profile';
import AvatarImage from '@/shared/assets/images/avatar.png';
import {
    getRouteArchives,
    getRouteMessages,
    getRouteSettings,
} from '@/shared/const/router';
import { formatDate } from '@/shared/lib/utils/date/formatDate/formatDate';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './ProfileInfo.module.scss';

interface ProfileInfoProps {
    isCurrentUser: boolean;
    handleOpenSettings: () => void;
    handleFollow: () => void;
    handleOpenMore: () => void;
    handleOpenFollowers: () => void;
    handleOpenFollowing: () => void;
}

export const ProfileInfo = (props: ProfileInfoProps) => {
    const {
        isCurrentUser,
        handleOpenSettings,
        handleOpenFollowing,
        handleOpenMore,
        handleFollow,
        handleOpenFollowers,
    } = props;

    const profile = useSelector(getProfileData);
    const navigate = useNavigate();

    return (
        <HStack
            max
            justify="center"
            align="center"
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
                        text={profile?.nickname}
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
                                onClick={() => navigate(getRouteArchives())}
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
                            <Button onClick={handleFollow}>Follow</Button>
                            <Button
                                onClick={() => navigate(getRouteMessages())}
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
                    <Text
                        text={`${profile?.posts.length} post${profile?.posts.length > 1 ? 's' : ''}`}
                    />
                    <Button
                        onClick={handleOpenFollowers}
                        variant="clear"
                    >
                        {profile?.followers.length} follower
                        {profile?.followers.length > 1 ? 's' : ''}
                    </Button>
                    <Button
                        onClick={handleOpenFollowing}
                        variant="clear"
                    >
                        {profile?.following.length} following
                    </Button>
                </HStack>
                <Text
                    text={`Account was created on ${formatDate(profile?.createdAt)}`}
                    size="s"
                />
            </VStack>
        </HStack>
    );
};

export default ProfileInfo;
