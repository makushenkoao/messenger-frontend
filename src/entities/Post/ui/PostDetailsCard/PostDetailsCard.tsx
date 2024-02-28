import { HStack, VStack } from '@/shared/ui/Stack';
import { AppImage } from '@/shared/ui/AppImage';
import { Text } from '@/shared/ui/Text';
import { Card } from '@/shared/ui/Card';
import PostImage from '@/shared/assets/images/image-post.png';
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
                    <HStack
                        max
                        justify="center"
                    >
                        <AppImage
                            src={PostImage}
                            className={cls.postImage}
                        />
                    </HStack>
                    {/* eslint-disable-next-line max-len */}
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, aut delectus dicta dolore dolorem eligendi fugit, in iste laborum maxime non perspiciatis totam vitae? Amet est facere possimus quas quia." />
                </VStack>
            </HStack>
        </Card>
    );
};
