import React, { useState } from 'react';

import { MoreModal, PostDetailsCard, ShareModal } from '@/entities/Post';
import { PostCommentsCard } from '@/features/PostCommentsCard';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { VStack } from '@/shared/ui/Stack';
import { BackIcon } from '@/widgets/BackIcon';
import { PostDetailsAdditionalInfo } from '@/widgets/PostDetailsAdditionalInfo';

const PostDetailsPage = () => {
    const [isOpenMoreModal, setIsOpenMoreModal] = useState(false);
    const [isOpenShareModal, setIsOpenShareModal] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const toggleIsFav = () => setIsFav((prevState) => !prevState);
    const toggleIsSaved = () => setIsSaved((prevState) => !prevState);

    const onOpenShareModal = () => setIsOpenShareModal(true);
    const onCloseShareModal = () => setIsOpenShareModal(false);

    const onOpenMoreModal = () => setIsOpenMoreModal(true);
    const onCloseMoreModal = () => setIsOpenMoreModal(false);

    return (
        <StickyContentLayout
            content={
                <VStack
                    max
                    gap="32"
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
            }
            left={<BackIcon />}
            right={
                <PostDetailsAdditionalInfo
                    isSaved={isSaved}
                    isFavorite={isFav}
                    onOpenShareModal={onOpenShareModal}
                    onOpenMoreModal={onOpenMoreModal}
                    toggleIsFavorite={toggleIsFav}
                    toggleIsSaved={toggleIsSaved}
                />
            }
        />
    );
};
export default PostDetailsPage;
