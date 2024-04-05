import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';

import { getImages } from '@/features/File';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AppImage } from '@/shared/ui/AppImage';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { getPostDetailsData } from '../../model/selectors/postDetails';

import cls from './PostDetailsCard.module.scss';

export const PostDetailsCard = () => {
    const [images, setImages] = useState<string | string[]>('');
    const post = useSelector(getPostDetailsData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getImages([{ id: '6601ffd75a8312681080ce0d' }]))
            .unwrap()
            .then(setImages);
    }, [post.photos, dispatch]);

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
                            fallback={<Skeleton height={600} />}
                            errorFallback={<Skeleton height={600} />}
                        />
                    ))}
                </Carousel>
            );
        }

        return (
            <AppImage
                width="100%"
                src={images}
                fallback={<Skeleton height={600} />}
                errorFallback={<Skeleton height={600} />}
            />
        );
    };

    return (
        <Card
            padding="16"
            max
        >
            <HStack
                justify="center"
                max
            >
                <VStack
                    max
                    gap="16"
                >
                    <Text title={post.title} />
                    {renderImages()}
                    <Text text={post.text} />
                </VStack>
            </HStack>
        </Card>
    );
};
