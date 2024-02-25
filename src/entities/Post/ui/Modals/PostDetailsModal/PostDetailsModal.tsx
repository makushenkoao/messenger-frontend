import React, { useState } from 'react';
import {
    MdBookmark,
    MdBookmarkBorder,
    MdFavorite,
    MdFavoriteBorder,
    MdMoreHoriz,
    MdSend,
} from 'react-icons/md';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';
import { MoreModal } from '../MoreModal/MoreModal';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { ShareModal } from '../ShareModal/ShareModal';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import PostImage from '@/shared/assets/images/image-post.png';
import AvatarImage from '@/shared/assets/images/avatar.png';
import cls from './PostDetailsModal.module.scss';

interface PostDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// 500X900

export const PostDetailsModal = (props: PostDetailsModalProps) => {
    const { isOpen, onClose } = props;
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
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                padding="none"
            >
                <HStack
                    max
                    gap="0"
                    align="start"
                >
                    <img
                        src={PostImage}
                        alt=""
                        className={cls.postImage}
                    />
                    <VStack
                        max
                        gap="8"
                        className={cls.details}
                    >
                        <HStack
                            className={cls.detailsHeader}
                            max
                            justify="between"
                        >
                            <HStack gap="8">
                                <Avatar
                                    src={AvatarImage}
                                    width={44}
                                    height={44}
                                />
                                <Text
                                    text="makushenkoao"
                                    bold
                                />
                            </HStack>
                            <Icon
                                svg={MdMoreHoriz}
                                className={cls.icon}
                                clickable
                                onClick={onOpenMoreModal}
                            />
                        </HStack>
                        <div className={cls.commentsContainer}>
                            <Text title="COMMENTS" />
                        </div>
                        <VStack
                            max
                            gap="8"
                            className={cls.detailsFooter}
                        >
                            <HStack
                                max
                                justify="between"
                            >
                                <HStack gap="8">
                                    <Icon
                                        svg={
                                            isFav
                                                ? MdFavorite
                                                : MdFavoriteBorder
                                        }
                                        className={cls.icon}
                                        clickable
                                        onClick={toggleIsFav}
                                    />
                                    <Icon
                                        svg={MdSend}
                                        className={cls.icon}
                                        clickable
                                        onClick={onOpenShareModal}
                                    />
                                </HStack>
                                <Icon
                                    svg={
                                        isSaved ? MdBookmark : MdBookmarkBorder
                                    }
                                    className={cls.icon}
                                    clickable
                                    onClick={toggleIsSaved}
                                />
                            </HStack>
                            <VStack gap="0">
                                <Text text="230 likes" />
                                <Text
                                    text="December 31, 2023"
                                    size="s"
                                />
                            </VStack>
                            <HStack
                                max
                                justify="between"
                                gap="16"
                            >
                                <Input
                                    multiple
                                    placeholder="Add a Comment"
                                />
                                <Button>Post</Button>
                            </HStack>
                        </VStack>
                    </VStack>
                </HStack>
            </Modal>
            <MoreModal
                isOpen={isOpenMoreModal}
                onClose={onCloseMoreModal}
            />
            <ShareModal
                isOpen={isOpenShareModal}
                onClose={onCloseShareModal}
            />
        </>
    );
};
