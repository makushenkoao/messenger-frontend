import React from 'react';
import { Modal } from '@/shared/ui/Modal';
import { Button } from '@/shared/ui/Button';
import cls from './MoreModal.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';

interface MoreModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const MoreModal = (props: MoreModalProps) => {
    const { isOpen, onClose } = props;

    const buttons = [
        {
            id: '1',
            content: 'Cancel Subscribe',
            onClick: () => console.log('click'),
            important: true,
        },
        {
            id: '2',
            content: 'Save Post',
            onClick: () => console.log('click'),
        },
        {
            id: '3',
            content: 'Go to Publication',
            onClick: () => console.log('click'),
        },
        {
            id: '4',
            content: 'Send...',
            onClick: () => console.log('click'),
        },
        {
            id: '5',
            content: 'Copy Post Link',
            onClick: () => console.log('click'),
        },
        {
            id: '6',
            content: 'Cancel',
            onClick: onClose,
        },
    ];

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            padding="none"
        >
            <VStack
                gap="0"
                max
            >
                {buttons.map((item, index) => (
                    <Button
                        key={item.id}
                        fullWidth
                        variant="clear"
                        onClick={item.onClick}
                        className={classNames(
                            cls.btn,
                            {
                                [cls.lastBtn]: index === buttons.length - 1,
                            },
                            [],
                        )}
                        color={item.important ? 'error' : 'normal'}
                    >
                        {item.content}
                    </Button>
                ))}
            </VStack>
        </Modal>
    );
};
