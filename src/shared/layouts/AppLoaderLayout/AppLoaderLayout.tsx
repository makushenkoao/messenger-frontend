import { memo } from 'react';

import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';

import { MainLayout } from '../MainLayout';
import { StickyContentLayout } from '../StickyContentLayout';

import cls from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = memo(() => {
    return (
        <MainLayout
            header={
                <HStack className={cls.header}>
                    <Skeleton
                        width={40}
                        height={40}
                        borderRadius="50%"
                    />
                </HStack>
            }
            content={
                <StickyContentLayout
                    className={cls.fullHeight}
                    content={
                        <VStack
                            gap="16"
                            className={cls.fullHeight}
                        >
                            <Skeleton
                                width="90%"
                                height="20%"
                                borderRadius="16px"
                            />
                            <Skeleton
                                width="90%"
                                height="30%"
                                borderRadius="16px"
                            />
                            <Skeleton
                                width="90%"
                                height="20%"
                                borderRadius="16px"
                            />
                            <Skeleton
                                width="90%"
                                height="30%"
                                borderRadius="16px"
                            />
                        </VStack>
                    }
                    right={
                        <Skeleton
                            width={300}
                            height={400}
                            borderRadius="12%"
                        />
                    }
                />
            }
            sidebar={
                <Skeleton
                    borderRadius="32px"
                    width={220}
                    height="100%"
                />
            }
        />
    );
});
