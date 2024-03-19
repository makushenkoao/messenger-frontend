import { FormEvent } from 'react';
import { MdOutlineCreateNewFolder } from 'react-icons/md';

import { useCreatePost } from '@/entities/Post';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { FileInput } from '@/shared/ui/FileInput';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { Modal } from '@/shared/ui/Modal';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './CreatePostButton.module.scss';

interface CreatePostButtonProps {
    className?: string;
}

export const CreatePostButton = (props: CreatePostButtonProps) => {
    const { className } = props;
    const {
        isOpenModal,
        handleCloseModal,
        handleOpenModal,
        handleCreatePost,
        handleChangeFile,
        handleChangeData,
        data,
        selectedFile,
        loading,
    } = useCreatePost();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleCreatePost();
    };

    return (
        <div className={classNames(cls.CreatePostButton, {}, [className])}>
            <Icon
                svg={MdOutlineCreateNewFolder}
                width={36}
                height={36}
                onClick={handleOpenModal}
                clickable
                className={cls.icon}
            />
            <Modal
                isOpen={isOpenModal}
                onClose={handleCloseModal}
                lazy
            >
                <form
                    onSubmit={onSubmit}
                    className={cls.form}
                >
                    <VStack
                        max
                        gap="16"
                    >
                        <div className={cls.header}>
                            <Text
                                text="Create Post"
                                bold
                            />
                        </div>
                        <Input
                            placeholder="Enter Title"
                            value={data.title}
                            onChange={(value) =>
                                handleChangeData(value, 'title')
                            }
                            disabled={loading}
                        />
                        <Input
                            placeholder="Enter Description"
                            value={data.text}
                            onChange={(value) =>
                                handleChangeData(value, 'text')
                            }
                            disabled={loading}
                        />
                        <FileInput
                            onFileChange={handleChangeFile}
                            value={selectedFile}
                            disabled={loading}
                        />
                        <div className={cls.footer}>
                            <Button
                                type="submit"
                                fullWidth
                                disabled={loading}
                            >
                                Create Post
                            </Button>
                        </div>
                    </VStack>
                </form>
            </Modal>
        </div>
    );
};
