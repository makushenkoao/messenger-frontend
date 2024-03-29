import React, { useState } from 'react';
import {
    MdBookmark,
    MdBookmarkBorder,
    MdFavorite,
    MdFavoriteBorder,
    MdMoreHoriz,
    MdOutlineComment,
    MdSend,
} from 'react-icons/md';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

import AvatarImage from '@/shared/assets/images/avatar.png';
import PostImage1 from '@/shared/assets/images/post-image-1.png';
import PostImage2 from '@/shared/assets/images/post-image-2.jpeg';
import PostImage3 from '@/shared/assets/images/post-image-3.jpeg';
import PostImage4 from '@/shared/assets/images/post-image-4.jpeg';
import PostImage5 from '@/shared/assets/images/post-image-5.jpeg';
import { getRoutePostDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { MoreModal } from '../../ui/MoreModal/MoreModal';
import { ShareModal } from '../../ui/ShareModal/ShareModal';

import cls from './Post.module.scss';

export const PostCard = () => {
    const navigation = useNavigate();
    const [isOpenMoreModal, setIsOpenMoreModal] = useState(false);
    const [isOpenShareModal, setIsOpenShareModal] = useState(false);
    const [isFav, setIsFav] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const toggleIsFav = () => setIsFav((prevState) => !prevState);
    const toggleIsSaved = () => setIsSaved((prevState) => !prevState);

    const onOpenMoreModal = () => setIsOpenMoreModal(true);
    const onCloseMoreModal = () => setIsOpenMoreModal(false);

    const onOpenShareModal = () => setIsOpenShareModal(true);
    const onCloseShareModal = () => setIsOpenShareModal(false);

    const handleNavigateToPostDetails = () => {
        navigation(getRoutePostDetails('post-id-here'));
    };

    const descriptionText =
        // eslint-disable-next-line max-len
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda fugit incidunt quaerat voluptatem? Aperiam atque cum, deleniti dicta ducimus ea eaque illo laborum maxime natus quo tempore, velit veniam voluptas?';

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
            <Carousel
                className={cls.carousel}
                showStatus={false}
            >
                <AppImage
                    src={PostImage1}
                    className={cls.postImage}
                />
                <AppImage
                    src={PostImage2}
                    className={cls.postImage}
                />
                <AppImage
                    src={PostImage3}
                    className={cls.postImage}
                />
                <AppImage
                    src={PostImage4}
                    className={cls.postImage}
                />
                <AppImage
                    src={PostImage5}
                    className={cls.postImage}
                />
            </Carousel>
            <VStack
                max
                gap="4"
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
                            onClick={handleNavigateToPostDetails}
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
                <Text
                    text="Title"
                    bold
                />
                <span className={cls.description}>
                    {`${descriptionText.slice(0, 40)}...`}
                    <AppLink
                        className={cls.moreBtn}
                        to={getRoutePostDetails('post-id-here')}
                    >
                        more
                    </AppLink>
                </span>
                <Button
                    color="gray"
                    variant="clear"
                    onClick={handleNavigateToPostDetails}
                >
                    View Comments
                </Button>
            </VStack>
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
