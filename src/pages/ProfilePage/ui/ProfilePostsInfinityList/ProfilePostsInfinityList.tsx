import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getProfileData } from '@/entities/Profile';
import PostImage from '@/shared/assets/images/post-image-1.png';
import { getRoutePostDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { HStack } from '@/shared/ui/Stack';

import cls from './ProfilePostsInfinityList.module.scss';

export const ProfilePostsInfinityList = () => {
    const navigate = useNavigate();
    const profile = useSelector(getProfileData);

    const handleNavigateToPostDetails = () => {
        navigate(getRoutePostDetails('post-id-here'));
    };

    if (!profile) return null;

    return (
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
    );
};
