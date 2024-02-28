import { MdMoreHoriz, MdSend } from 'react-icons/md';
import { useState } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import AvatarImage from '@/shared/assets/images/avatar.png';
import cls from './Chat.module.scss';
import { ChatSettingsModal } from '../ChatSettingsModal/ChatSettingsModal';

export const Chat = () => {
    const [isOpenMore, setIsOpenMore] = useState(false);

    const handleOpenMore = () => setIsOpenMore(true);
    const handleCloseMore = () => setIsOpenMore(false);

    const handleSendMessage = () => {
        console.log('Send Message');
    };

    return (
        <Card
            padding="0"
            max
            className={cls.Chat}
        >
            <HStack
                max
                justify="between"
                className={cls.chatHeader}
            >
                <HStack gap="8">
                    <Avatar
                        width={40}
                        height={40}
                        src={AvatarImage}
                    />
                    <Text
                        text="makushenkoao"
                        bold
                    />
                </HStack>
                <Icon
                    svg={MdMoreHoriz}
                    className={cls.moreIcon}
                    width={30}
                    height={30}
                    clickable
                    onClick={handleOpenMore}
                />
            </HStack>
            <div className={cls.chatContent}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Culpa, delectus dolor doloremque eaque fuga fugit, harum
                    magnam minus molestias nemo nobis vitae? Consequatur dolorem
                    ea eaque eos incidunt repellat sunt.
                </div>
            </div>
            <HStack
                max
                gap="16"
                className={cls.chatFooter}
            >
                <Input placeholder="Enter Message" />
                <Icon
                    svg={MdSend}
                    className={cls.sendIcon}
                    width={40}
                    height={40}
                    clickable
                    onClick={handleSendMessage}
                />
            </HStack>
            <ChatSettingsModal
                isOpen={isOpenMore}
                onClose={handleCloseMore}
            />
        </Card>
    );
};