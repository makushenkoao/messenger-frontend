import React, { useState } from 'react';
import {
    MdFavoriteBorder,
    MdOutlineComment,
    MdSend,
    MdBookmarkBorder,
    MdMoreHoriz,
    MdFavorite,
    MdBookmark,
} from 'react-icons/md';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppImage } from '@/shared/ui/AppImage';
import { Text } from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { Button } from '@/shared/ui/Button';
import AvatarImage from '@/shared/assets/images/avatar.png';
import PostImage from '@/shared/assets/images/image-post.png';
import cls from './Post.module.scss';
import { MoreModal } from '../Modals/MoreModal/MoreModal';
import { PostDetailsModal } from '../Modals/PostDetailsModal/PostDetailsModal';
import { ShareModal } from '../Modals/ShareModal/ShareModal';

export const Post = () => {
    const [isOpenMoreModal, setIsOpenMoreModal] = useState(false);
    const [isOpenShareModal, setIsOpenShareModal] = useState(false);
    const [isOpenDetailsModal, setIsOpenDetailsModal] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const toggleIsFav = () => setIsFav((prevState) => !prevState);
    const toggleIsSaved = () => setIsSaved((prevState) => !prevState);

    const onOpenMoreModal = () => setIsOpenMoreModal(true);
    const onCloseMoreModal = () => setIsOpenMoreModal(false);

    const onOpenDetailsModal = () => setIsOpenDetailsModal(true);
    const onCloseDetailsModal = () => setIsOpenDetailsModal(false);

    const onOpenShareModal = () => setIsOpenShareModal(true);
    const onCloseShareModal = () => setIsOpenShareModal(false);

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
                    <Avatar
                        width={32}
                        height={32}
                        src={AvatarImage}
                        username="makushenkoao"
                    />
                    <Text text="makushenkoao | 2 weeks" />
                </HStack>
                <Icon
                    svg={MdMoreHoriz}
                    className={cls.icon}
                    clickable
                    onClick={onOpenMoreModal}
                />
            </HStack>
            <AppImage
                src={PostImage}
                className={cls.postImage}
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
                        <Icon
                            svg={isFav ? MdFavorite : MdFavoriteBorder}
                            className={cls.icon}
                            clickable
                            onClick={toggleIsFav}
                        />
                        <Icon
                            svg={MdOutlineComment}
                            className={cls.icon}
                            clickable
                            onClick={onOpenDetailsModal}
                        />
                        <Icon
                            svg={MdSend}
                            className={cls.icon}
                            clickable
                            onClick={onOpenShareModal}
                        />
                    </HStack>
                    <Icon
                        svg={isSaved ? MdBookmark : MdBookmarkBorder}
                        className={cls.icon}
                        clickable
                        onClick={toggleIsSaved}
                    />
                </HStack>
                <Text text="230 likes" />
                {/* eslint-disable-next-line max-len */}
                <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fugit incidunt quaerat voluptatem? Aperiam atque cum, deleniti dicta ducimus ea eaque illo laborum maxime natus quo tempore, velit veniam voluptas?" />
                <Button
                    color="gray"
                    variant="clear"
                >
                    View Comments
                </Button>
            </VStack>
            <MoreModal
                isOpen={isOpenMoreModal}
                onClose={onCloseMoreModal}
            />
            <PostDetailsModal
                isOpen={isOpenDetailsModal}
                onClose={onCloseDetailsModal}
            />
            <ShareModal
                isOpen={isOpenShareModal}
                onClose={onCloseShareModal}
            />
        </VStack>
    );
};
