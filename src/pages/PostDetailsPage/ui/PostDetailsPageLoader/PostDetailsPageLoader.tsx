import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';

export const PostDetailsPageLoader = () => {
    return (
        <StickyContentLayout
            content={
                <VStack
                    max
                    gap="16"
                >
                    <Skeleton
                        height={500}
                        borderRadius="24px"
                    />
                    <Skeleton
                        height={300}
                        borderRadius="24px"
                    />
                </VStack>
            }
            left={
                <Skeleton
                    width={50}
                    height={50}
                    borderRadius="50%"
                />
            }
            right={
                <Skeleton
                    width={300}
                    height={320}
                    borderRadius="24px"
                />
            }
        />
    );
};
