import { useSelector } from 'react-redux';

import { getProfileData } from '@/entities/Profile';
import {
    getProfilePostsData,
} from '@/entities/ProfilePosts';
import { HStack } from '@/shared/ui/Stack';

import { ProfilePost } from '../ProfilePost/ProfilePost';

export const ProfilePostsList = () => {
    const profile = useSelector(getProfileData);
    const profilePosts = useSelector(getProfilePostsData);

    if (!profile || !profilePosts.length) return null;

    return (
        <HStack
            max
            gap="8"
            wrap="wrap"
            justify="center"
        >
            {profilePosts?.map((post, index) => (
                <ProfilePost
                    // TODO
                    key={index}
                    // key={post._id}
                    post={post}
                />
            ))}
        </HStack>
    );
};
