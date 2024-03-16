import { memo } from 'react';
import { MdDone, MdNotificationsNone } from 'react-icons/md';

import AvatarImage from '@/shared/assets/images/avatar.png';
import { Avatar } from '@/shared/ui/Avatar';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const handleNotificationClick = () => {
        console.log('Notification Click');
    };

    const handleDoneNotification = () => {
        console.log('Done Notification');
    };

    const trigger = (
        <Icon
            svg={MdNotificationsNone}
            clickable
            onClick={handleNotificationClick}
            className={cls.icon}
            width={36}
            height={36}
        />
    );

    return (
        <Popover
            className={className}
            direction="bottom left"
            trigger={trigger}
        >
            <VStack
                max
                gap="8"
            >
                {[1, 2, 3, 4, 5].map((item) => (
                    <Card
                        key={item}
                        variant="light"
                        padding="16"
                        className={cls.notification}
                    >
                        <HStack
                            max
                            justify="between"
                        >
                            <HStack gap="16">
                                <Avatar
                                    src={AvatarImage}
                                    width={44}
                                    height={44}
                                />
                                <VStack>
                                    <Text
                                        text="makushenkoao"
                                        bold
                                    />
                                    <Text
                                        className={cls.message}
                                        size="s"
                                        text="followed your profile 10 min ago"
                                    />
                                </VStack>
                            </HStack>
                            <Icon
                                svg={MdDone}
                                clickable
                                onClick={handleDoneNotification}
                                className={cls.icon}
                                width={36}
                                height={36}
                            />
                        </HStack>
                    </Card>
                ))}
            </VStack>
        </Popover>
    );
});
