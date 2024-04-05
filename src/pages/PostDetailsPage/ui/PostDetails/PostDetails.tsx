import React from 'react';
import { useSelector } from 'react-redux';

import {
    getPostDetailsData,
    getPostDetailsLoading,
    MoreModal,
    PostDetailsCard,
    ShareModal,
} from '@/entities/Post';
import { PostCommentsCard } from '@/features/PostCommentsCard';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { NotFoundDataPage } from '@/widgets/NotFoundDataPage';

interface PostDetailsProps {
    onCloseShareModal: () => void;
    onCloseMoreModal: () => void;
    isOpenMoreModal: boolean;
    isOpenShareModal: boolean;
}

export const PostDetails = (props: PostDetailsProps) => {
    const {
        onCloseShareModal,
        onCloseMoreModal,
        isOpenShareModal,
        isOpenMoreModal,
    } = props;

    const post = useSelector(getPostDetailsData);
    const loading = useSelector(getPostDetailsLoading);

    if (loading) {
        return (
            <VStack
                max
                gap="16"
            >
                <Card
                    max
                    padding="16"
                >
                    <VStack
                        max
                        gap="16"
                    >
                        <Skeleton
                            height={24}
                            width={200}
                            borderRadius="24px"
                        />
                        <Skeleton
                            height={500}
                            borderRadius="24px"
                        />
                        <Skeleton
                            height={40}
                            borderRadius="24px"
                        />
                    </VStack>
                </Card>
                <Card
                    max
                    padding="16"
                >
                    <VStack
                        max
                        gap="16"
                    >
                        <Skeleton
                            height={100}
                            borderRadius="24px"
                        />
                        <Skeleton
                            height={100}
                            borderRadius="24px"
                        />
                        <Skeleton
                            height={100}
                            borderRadius="24px"
                        />
                    </VStack>
                </Card>
            </VStack>
        );
    }

    if (!post) return <NotFoundDataPage />;

    return (
        <VStack
            max
            gap="16"
        >
            <PostDetailsCard />
            <PostCommentsCard />
            <MoreModal
                isOpen={isOpenMoreModal}
                onClose={onCloseMoreModal}
            />
            <ShareModal
                isOpen={isOpenShareModal}
                onClose={onCloseShareModal}
            />
        </VStack>
    );
};
