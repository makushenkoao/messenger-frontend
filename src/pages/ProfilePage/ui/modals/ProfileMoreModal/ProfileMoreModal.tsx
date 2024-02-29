import { Modal } from '@/shared/ui/Modal';
import { VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ProfileMoreModal.module.scss';

interface ProfileMoreModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ProfileMoreModal = (props: ProfileMoreModalProps) => {
    const { isOpen, onClose } = props;

    const buttons = [
        {
            id: '1',
            content: 'Block',
            onClick: () => console.log('click'),
            important: true,
        },
        {
            id: '2',
            content: 'Share to...',
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
                        color={item.important ? 'error' : 'normal'}
                    >
                        {item.content}
                    </Button>
                ))}
            </VStack>
        </Modal>
    );
};
