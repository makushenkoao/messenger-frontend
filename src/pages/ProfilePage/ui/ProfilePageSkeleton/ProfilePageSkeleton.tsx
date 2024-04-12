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
            <HStack
                max
                gap="16"
                wrap="wrap"
                justify="center"
            >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Skeleton
                        key={item}
                        width={300}
                        height={300}
                        borderRadius="12px"
                    />
                ))}
            </HStack>
        </VStack>
    );
};
