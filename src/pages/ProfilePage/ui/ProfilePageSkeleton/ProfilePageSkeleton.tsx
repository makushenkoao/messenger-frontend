import { PostCardSkeleton } from '@/entities/Post';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

export const ProfilePageSkeleton = () => {
    return (
        <VStack
            max
            gap="64"
        >
            <HStack
                max
                justify="center"
                align="center"
                gap="64"
            >
                <Skeleton
                    width={150}
                    height={150}
                    borderRadius="50%"
                />
                <VStack gap="16">
                    <HStack gap="16">
                        <Skeleton
                            height={24}
                            width={100}
                            borderRadius="12px"
                        />
                        <Skeleton
                            height={40}
                            width={140}
                            borderRadius="34px"
                        />
                        <Skeleton
                            height={40}
                            width={140}
                            borderRadius="34px"
                        />
                        <Skeleton
                            width={30}
                            height={30}
                            borderRadius="50%"
                        />
                    </HStack>
                    <HStack gap="16">
                        <Skeleton
                            height={24}
                            width={100}
                            borderRadius="12px"
                        />
                        <Skeleton
                            height={24}
                            width={100}
                            borderRadius="12px"
                        />
                        <Skeleton
                            height={24}
                            width={100}
                            borderRadius="12px"
                        />
                    </HStack>
                    <Skeleton
                        height={20}
                        width={100}
                        borderRadius="12px"
                    />
                </VStack>
            </HStack>
            <VStack
                max
                align="center"
                gap="16"
            >
                {[1, 2, 3].map((item) => (
                    <PostCardSkeleton key={item} />
                ))}
            </VStack>
        </VStack>
    );
};
