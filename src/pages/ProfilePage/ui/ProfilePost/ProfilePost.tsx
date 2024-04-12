import { useEffect, useState } from 'react';

import { Post } from '@/entities/Post';
import { getImages } from '@/features/File';
import { getRoutePostDetails } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Skeleton } from '@/shared/ui/Skeleton';

import cls from './ProfilePost.module.scss';

interface ProfilePostProps {
    post?: Post;
}

export const ProfilePost = (props: ProfilePostProps) => {
    const dispatch = useAppDispatch();
    const [image, setImage] = useState('');

    useEffect(() => {
        // TODO: обработать ошибку
        dispatch(
            getImages([
                { id: '66159812419b1ed3bf3bec12' },
                { id: '66159812419b1ed3bf3bec12' },
                { id: '66159812419b1ed3bf3bec12' },
            ]),
        )
            .unwrap()
            .then((data) => {
                if (Array.isArray(data)) {
                    setImage(data[0]);
                } else {
                    setImage(data);
                }
            });
    }, [props?.post?.photos, dispatch]);

    return (
        <AppLink
            to={getRoutePostDetails(props?.post._id)}
            className={cls.post}
        >
            <AppImage
                src={image}
                className={cls.postImage}
                fallback={
                    <Skeleton
                        width={300}
                        height={300}
                    />
                }
                errorFallback={
                    <Skeleton
                        width={300}
                        height={300}
                    />
                }
            />
        </AppLink>
    );
};
