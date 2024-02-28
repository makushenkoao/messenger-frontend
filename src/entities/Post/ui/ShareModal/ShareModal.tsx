import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import cls from './ShareModal.module.scss';
import { ShareUser } from './ShareUser/ShareUser';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ShareModal = (props: ShareModalProps) => {
    const { isOpen, onClose } = props;
    const [ids, setIds] = useState<number[]>([]);

    const handleChangeIds = (id: number) => {
        setIds((prevIds) => {
            if (prevIds.includes(id)) {
                return prevIds.filter((existingId) => existingId !== id);
            }
            return [...prevIds, id];
        });
    };

    const handleSend = () => {
        console.log('Selected IDS ==>', ids);

        onClose();
    };

    return (
        <Modal
            padding="none"
            isOpen={isOpen}
            onClose={onClose}
        >
            <VStack
                gap="16"
                className={cls.content}
            >
                <HStack
                    justify="center"
                    max
                >
                    <Text
                        align="center"
                        title="Share"
                        bold
                    />
                </HStack>
                <div className={cls.input}>
                    <Input placeholder="Search" />
                </div>
                <VStack
                    max
                    gap="0"
                    className={cls.list}
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                        (item) => (
                            <ShareUser
                                key={item}
                                item={item}
                                onChange={handleChangeIds}
                                checked={ids.includes(item)}
                            />
                        ),
                    )}
                </VStack>
                <div className={cls.btn}>
                    <Button
                        fullWidth
                        onClick={handleSend}
                    >
                        Send
                    </Button>
                </div>
            </VStack>
            <div className={cls.iconWrapper}>
                <Icon
                    clickable
                    onClick={onClose}
                    svg={MdClose}
                    className={cls.icon}
                />
            </div>
        </Modal>
    );
};
