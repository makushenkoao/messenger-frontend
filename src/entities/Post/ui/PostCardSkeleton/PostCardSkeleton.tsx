import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

import cls from './PostCardSkeleton.module.scss';

export const PostCardSkeleton = () => {
    return (
        <VStack
            gap="16"
            className={cls.Post}
        >
            <HStack
                max
                justify="between"
            >
                <HStack
                    max
                    gap="8"
                >
                    <Skeleton
                        width={32}
                        height={32}
                        borderRadius="50%"
                    />
                    <Skeleton
                        height={20}
                        width={250}
                        borderRadius="12px"
                    />
                </HStack>
                <Skeleton
                    width={30}
                    height={30}
                    borderRadius="50%"
                />
            </HStack>
            <Skeleton
                width={468}
                height={585}
            />
            <VStack
                max
                gap="8"
            >
                <HStack
                    max
                    justify="between"
                >
                    <HStack gap="8">
                        <Skeleton
                            width={30}
                            height={30}
                            borderRadius="50%"
                        />
                        <Skeleton
                            width={30}
                            height={30}
                            borderRadius="50%"
                        />
                        <Skeleton
                            width={30}
                            height={30}
                            borderRadius="50%"
                        />
                    </HStack>
                    <Skeleton
                        width={30}
                        height={30}
                        borderRadius="50%"
                    />
                </HStack>
                <Skeleton
                    height={14}
                    borderRadius="12px"
                />
                <Skeleton
                    height={14}
                    borderRadius="12px"
                />
                <Skeleton
                    height={14}
                    borderRadius="12px"
                />
                <Skeleton
                    height={30}
                    width={200}
                    borderRadius="12px"
                />
            </VStack>
        </VStack>
    );
};
