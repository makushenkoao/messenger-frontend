import {
    MdBookmark,
    MdBookmarkBorder,
    MdFavorite,
    MdFavoriteBorder,
    MdMoreHoriz,
    MdOutlineComment,
    MdSend,
} from 'react-icons/md';

import AvatarImage from '@/shared/assets/images/avatar.png';
import { formatDate } from '@/shared/lib/utils/formatDate/formatDate';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { usePostCard } from '../../lib/usePostCard/usePostCard';
import { Post } from '../../model/types/post';
import { MoreModal } from '../../ui/MoreModal/MoreModal';
import { ShareModal } from '../../ui/ShareModal/ShareModal';

import cls from './Post.module.scss';

interface PostCardProps {
    post?: Post;
}

export const PostCard = (props: PostCardProps) => {
    const { post } = props;

    const {
        toggleIsSaved,
        toggleIsFav,
        isFav,
        isSaved,
        renderImages,
        renderDescription,
        isOpenShareModal,
        isOpenMoreModal,
        onCloseShareModal,
        onCloseMoreModal,
        onOpenShareModal,
        onOpenMoreModal,
        handleNavigateToPostDetails,
    } = usePostCard(post);

    if (!post) return null;

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
                    <Text
                        text={`makushenkoao | ${formatDate(post.createdAt)}`}
                    />
                </HStack>
                <Icon
                    svg={MdMoreHoriz}
                    className={cls.icon}
                    clickable
                    onClick={onOpenMoreModal}
                />
            </HStack>
            {renderImages()}
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
                <Text text={`${post.likes.length} likes`} />
                <Text
                    text={post.title}
                    bold
                />
                {renderDescription()}
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
