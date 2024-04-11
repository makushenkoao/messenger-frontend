import {
    MdBookmark,
    MdBookmarkBorder,
    MdFavorite,
    MdFavoriteBorder,
    MdMoreHoriz,
    MdSend,
} from 'react-icons/md';
import { useSelector } from 'react-redux';

import { getPostDetailsData, getPostDetailsLoading } from '@/entities/Post';
import AvatarImage from '@/shared/assets/images/avatar.png';
import { formatDateDiff } from '@/shared/lib/utils/date/formatDateDiff/formatDateDiff';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './PostDetailsAdditionalInfo.module.scss';

interface PostDetailsAdditionalInfoProps {
    isFavorite: boolean;
    onOpenMoreModal: () => void;
    toggleIsFavorite: () => void;
    onOpenShareModal: () => void;
    toggleIsSaved: () => void;
    isSaved: boolean;
}

export const PostDetailsAdditionalInfo = (
    props: PostDetailsAdditionalInfoProps,
) => {
    const {
        isFavorite,
        toggleIsFavorite,
        toggleIsSaved,
        isSaved,
        onOpenShareModal,
        onOpenMoreModal,
    } = props;

    const post = useSelector(getPostDetailsData);
    const loading = useSelector(getPostDetailsLoading);

    if (loading) {
        return (
            <Skeleton
                width={300}
                height={400}
                borderRadius="24px"
            />
        );
    }

    if (!post) return null;

    return (
        <Card
            padding="16"
            style={{ width: 300 }}
        >
            <VStack
                max
                gap="16"
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
                        width={30}
                        height={30}
                        onClick={onOpenMoreModal}
                    />
                </HStack>
                <VStack gap="4">
                    <Text text={`${post.likes.length} likes`} />
                    <Text text={formatDateDiff(post.createdAt)} />
                </VStack>
                <HStack
                    max
                    justify="between"
                >
                    <HStack gap="8">
                        <Icon
                            svg={isFavorite ? MdFavorite : MdFavoriteBorder}
                            className={cls.icon}
                            clickable
                            onClick={toggleIsFavorite}
                            width={30}
                            height={30}
                        />
                        <Icon
                            svg={MdSend}
                            className={cls.icon}
                            clickable
                            onClick={onOpenShareModal}
                            width={30}
                            height={30}
                        />
                    </HStack>
                    <Icon
                        svg={isSaved ? MdBookmark : MdBookmarkBorder}
                        className={cls.icon}
                        clickable
                        onClick={toggleIsSaved}
                        width={30}
                        height={30}
                    />
                </HStack>
            </VStack>
        </Card>
    );
};
