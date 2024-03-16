import React, { useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { CreateMessageModal } from '../CreateMessageModal/CreateMessageModal';

import cls from './StartMessageCard.module.scss';

export const StartMessageCard = () => {
    const [isOpenCreateMessage, setIsOpenCreateMessage] = useState(false);

    const handleOpenCreateMessage = () => setIsOpenCreateMessage(true);
    const handleCloseCreateMessage = () => setIsOpenCreateMessage(false);

    return (
        <Card
            max
            className={cls.StartMessageCard}
        >
            <VStack
                gap="8"
                max
                align="center"
            >
                <Text
                    text="Your Messages"
                    bold
                />
                <Text text="Send private photos and messages to a friend" />
                <Button onClick={handleOpenCreateMessage}>Send Message</Button>
            </VStack>
            <CreateMessageModal
                onClose={handleCloseCreateMessage}
                isOpen={isOpenCreateMessage}
            />
        </Card>
    );
};
