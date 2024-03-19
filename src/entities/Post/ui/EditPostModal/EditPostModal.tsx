import { FormEvent } from 'react';
import { MdClose } from 'react-icons/md';

import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import { useUpdatePost } from '../../lib/useEditPost/useEditPost';

import cls from './PostEditModal.module.scss';

interface EditPostModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const EditPostModal = (props: EditPostModalProps) => {
    const { isOpen, onClose } = props;

    const { handleChangeData, data, handleUpdatePost, loading } = useUpdatePost(
        {
            id: '65f9bd3821a828f589ca2b69',
            onClose,
        },
    );

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleUpdatePost();
    };

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
                <form
                    className={cls.form}
                    onSubmit={onSubmit}
                >
                    <Input
                        placeholder="Enter Title"
                        value={data.title}
                        onChange={(value) => handleChangeData(value, 'title')}
                        disabled={loading}
                    />
                    <Input
                        placeholder="Enter Description"
                        value={data.text}
                        onChange={(value) => handleChangeData(value, 'text')}
                        disabled={loading}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        disabled={loading}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Modal>
    );
};
