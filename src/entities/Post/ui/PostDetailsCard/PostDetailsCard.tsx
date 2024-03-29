import { Carousel } from 'react-responsive-carousel';

import PostImage1 from '@/shared/assets/images/post-image-1.png';
import PostImage2 from '@/shared/assets/images/post-image-2.jpeg';
import PostImage3 from '@/shared/assets/images/post-image-3.jpeg';
import PostImage4 from '@/shared/assets/images/post-image-4.jpeg';
import PostImage5 from '@/shared/assets/images/post-image-5.jpeg';
import { AppImage } from '@/shared/ui/AppImage';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './PostDetailsCard.module.scss';

export const PostDetailsCard = () => {
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
                    <Text title="Title" />
                    <Carousel
                        className={cls.carousel}
                        showStatus={false}
                        showThumbs={false}
                    >
                        <AppImage
                            src={PostImage1}
                            className={cls.postImage}
                            fallback={
                                <Skeleton
                                    width="100%"
                                    height={600}
                                />
                            }
                        />
                        <AppImage
                            src={PostImage2}
                            className={cls.postImage}
                            fallback={
                                <Skeleton
                                    width="100%"
                                    height={600}
                                />
                            }
                        />
                        <AppImage
                            src={PostImage3}
                            className={cls.postImage}
                            fallback={
                                <Skeleton
                                    width="100%"
                                    height={600}
                                />
                            }
                        />
                        <AppImage
                            src={PostImage4}
                            className={cls.postImage}
                            fallback={
                                <Skeleton
                                    width="100%"
                                    height={600}
                                />
                            }
                        />
                        <AppImage
                            src={PostImage5}
                            className={cls.postImage}
                            fallback={
                                <Skeleton
                                    width="100%"
                                    height={600}
                                />
                            }
                        />
                    </Carousel>
                    {/* eslint-disable-next-line max-len */}
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aut delectus dicta dolore dolorem eligendi fugit, in iste laborum maxime non perspiciatis totam vitae? Amet est facere possimus quas quia." />
                </VStack>
            </HStack>
        </Card>
    );
};
