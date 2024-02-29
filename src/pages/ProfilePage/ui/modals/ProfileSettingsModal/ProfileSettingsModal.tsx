import { Modal } from '@/shared/ui/Modal';
import { VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileSettingsModal.module.scss';

interface ProfileSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ProfileSettingsModal = (props: ProfileSettingsModalProps) => {
    const { isOpen, onClose } = props;

    const buttons = [
        {
            id: '1',
            content: 'Settings',
            onClick: () => console.log('click'),
        },
        {
            id: '2',
            content: 'Log Out',
            onClick: () => console.log('click'),
        },
        {
            id: '3',
            content: 'Cancel',
            onClick: onClose,
        },
    ];

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            padding="none"
            lazy
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
                    >
                        {item.content}
                    </Button>
                ))}
            </VStack>
        </Modal>
    );
};
