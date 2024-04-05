import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

import { getImages } from '@/features/File';
import { getRoutePostDetails } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { Post } from '../../model/types/post';

import cls from '../../ui/PostCard/Post.module.scss';

export const usePostCard = (post?: Post) => {
    const [images, setImages] = useState<string | string[]>('');
    const [isOpenMoreModal, setIsOpenMoreModal] = useState(false);
    const [isOpenShareModal, setIsOpenShareModal] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const navigation = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            getImages([
                { id: '6601ffd75a8312681080ce0d' },
                { id: '6601ffd75a8312681080ce0d' },
                { id: '6601ffd75a8312681080ce0d' },
            ]),
        )
            .unwrap()
            .then(setImages);
    }, [post.photos, dispatch]);

    const toggleIsFav = () => setIsFav((prevState) => !prevState);
    const toggleIsSaved = () => setIsSaved((prevState) => !prevState);

    const onOpenMoreModal = () => setIsOpenMoreModal(true);
    const onCloseMoreModal = () => setIsOpenMoreModal(false);

    const onOpenShareModal = () => setIsOpenShareModal(true);
    const onCloseShareModal = () => setIsOpenShareModal(false);

    const handleNavigateToPostDetails = () => {
        if (!post) return;

        navigation(getRoutePostDetails(post._id));
    };

    const renderDescription = () => {
        if (post.text.length >= 40) {
            return (
                <HStack gap="4">
                    <Text text={`${post.text.slice(0, 40)}...`} />
                    <AppLink
                        className={cls.moreBtn}
                        to={getRoutePostDetails('post-id-here')}
                    >
                        more
                    </AppLink>
                </HStack>
            );
        }

        return <Text text={post.text} />;
    };

    const renderImages = () => {
        if (Array.isArray(images)) {
            return (
                <Carousel
                    className={cls.carousel}
                    showStatus={false}
                    showThumbs={false}
                >
                    {images.map((src) => (
                        <AppImage
                            key={src}
                            src={src}
                            className={cls.postImage}
                            fallback={<Skeleton className={cls.postImage} />}
                            errorFallback={
                                <Skeleton className={cls.postImage} />
                            }
                        />
                    ))}
                </Carousel>
            );
        }

        return (
            <AppImage
                errorFallback={<Skeleton className={cls.postImage} />}
                fallback={<Skeleton className={cls.postImage} />}
                src={images}
                className={cls.postImage}
            />
        );
    };

    return {
        isOpenMoreModal,
        isOpenShareModal,
        isFav,
        isSaved,
        toggleIsFav,
        toggleIsSaved,
        onOpenMoreModal,
        onCloseMoreModal,
        onOpenShareModal,
        onCloseShareModal,
        handleNavigateToPostDetails,
        renderDescription,
        renderImages,
    };
};
