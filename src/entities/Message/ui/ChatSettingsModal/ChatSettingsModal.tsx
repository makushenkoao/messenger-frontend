import { Modal } from '@/shared/ui/Modal';
import { VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ChatSettingsModal.module.scss';

interface ChatSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ChatSettingsModal = (props: ChatSettingsModalProps) => {
    const { onClose, isOpen } = props;

    const options = [
        {
            id: '1',
            content: 'Block',
            onClick: () => console.log('click'),
            important: true,
        },
        {
            id: '1',
            content: 'Delete Chat',
            onClick: () => console.log('click'),
            important: true,
        },
        {
            id: '1',
            content: 'Cancel',
            onClick: () => onClose(),
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
                {options.map((item, index) => (
                    <Button
                        key={item.id}
                        fullWidth
                        variant="clear"
                        onClick={item.onClick}
                        className={classNames(
                            cls.btn,
                            {
                                [cls.lastBtn]: index === options.length - 1,
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
