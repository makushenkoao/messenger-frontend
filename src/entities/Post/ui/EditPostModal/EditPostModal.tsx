import { MdClose } from 'react-icons/md';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './PostEditModal.module.scss';

interface EditPostModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const EditPostModal = (props: EditPostModalProps) => {
    const { isOpen, onClose } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            padding="none"
        >
            <div className={cls.content}>
                <HStack
                    max
                    justify="between"
                    className={cls.header}
                >
                    <div className={cls.close} />
                    <Text
                        text="Post Edit"
                        bold
                    />
                    <Icon
                        svg={MdClose}
                        className={cls.close}
                        width={36}
                        height={36}
                        clickable
                        onClick={onClose}
                    />
                </HStack>
                <div className={cls.form}>
                    <Input placeholder="Enter Description" />
                    <Button fullWidth>Update</Button>
                </div>
            </div>
        </Modal>
    );
};
