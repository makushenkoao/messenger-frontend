import React, { useState } from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

import AvatarImage from '@/shared/assets/images/avatar.png';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './CommentsListItem.module.scss';

export const CommentsListItem = () => {
    const [isFavoriteComment, setIsFavoriteComment] = useState(false);

    const toggleIsFavoriteComment = () => {
        setIsFavoriteComment((prevState) => !prevState);
    };

    return (
        <HStack
            max
            justify="between"
        >
            <HStack
                gap="8"
                align="start"
            >
                <Avatar
                    width={44}
                    height={44}
                    src={AvatarImage}
                />
                <VStack>
                    <Text
                        text="makushenkoao"
                        bold
                    />
                    {/* eslint-disable-next-line max-len */}
                    <Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at doloremque et minus numquam odit, quis quisquam, tempore temporibus vero, vitae voluptates. Cum dolores error est, nisi odit provident vero?" />
                    <HStack gap="8">
                        <Text
                            text="8w"
                            className={cls.commentInfoText}
                        />
                        <Text
                            text="12 likes"
                            className={cls.commentInfoText}
                        />
                        <Text
                            text="Reply"
                            className={cls.replyBtn}
                        />
                    </HStack>
                </VStack>
            </HStack>
            <Icon
                svg={isFavoriteComment ? MdFavorite : MdFavoriteBorder}
                className={cls.commentFavIcon}
                clickable
                width={24}
                height={24}
                onClick={toggleIsFavoriteComment}
            />
        </HStack>
    );
};
