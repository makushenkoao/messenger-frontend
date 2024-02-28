import React, { useState } from 'react';
import { MdOutlineCreate } from 'react-icons/md';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { CreateMessageModal } from '../CreateMessageModal/CreateMessageModal';
import AvatarImage from '@/shared/assets/images/avatar.png';
import cls from './ChatList.module.scss';
import { useNavigate } from 'react-router-dom';
import { getRouteChat } from '@/shared/const/router';

export const ChatList = () => {
    const [isOpenCreateMessage, setIsOpenCreateMessage] = useState(false);
    const navigation = useNavigate();

    const handleOpenCreateMessage = () => setIsOpenCreateMessage(true);
    const handleCloseCreateMessage = () => setIsOpenCreateMessage(false);

    const handleChatClick = (item: number) => {
        navigation(getRouteChat(`chat-id-here-${item}`));
    };

    return (
        <Card
            padding="0"
            className={cls.usersWrapper}
        >
            <VStack
                max
                gap="0"
            >
                <div className={cls.header}>
                    <Text
                        text="makushenkoao"
                        bold
                    />
                    <Icon
                        svg={MdOutlineCreate}
                        className={cls.createIcon}
                        clickable
                        onClick={handleOpenCreateMessage}
                        width={30}
                        height={30}
                    />
                </div>
                {[
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                    18, 19, 20,
                ].map((item) => (
                    <HStack
                        gap="8"
                        key={item}
                        className={cls.userListItem}
                        onClick={() => handleChatClick(item)}
                    >
                        <Avatar
                            width={40}
                            height={40}
                            src={AvatarImage}
                        />
                        <div>
                            <Text
                                text="makushenkoao"
                                bold
                            />
                            <Text
                                text="Hello!"
                                size="s"
                                className={cls.messageText}
                            />
                        </div>
                    </HStack>
                ))}
            </VStack>
            <CreateMessageModal
                onClose={handleCloseCreateMessage}
                isOpen={isOpenCreateMessage}
            />
        </Card>
    );
};
