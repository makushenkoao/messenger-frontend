import PostImage from '@/shared/assets/images/image-post.png';
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
                    <AppImage
                        src={PostImage}
                        className={cls.postImage}
                        fallback={
                            <Skeleton
                                width="100%"
                                height={600}
                            />
                        }
                    />
                    {/* eslint-disable-next-line max-len */}
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aut delectus dicta dolore dolorem eligendi fugit, in iste laborum maxime non perspiciatis totam vitae? Amet est facere possimus quas quia." />
                </VStack>
            </HStack>
        </Card>
    );
};
