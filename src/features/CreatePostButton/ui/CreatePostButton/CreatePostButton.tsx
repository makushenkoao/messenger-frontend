import { MdOutlineCreateNewFolder } from 'react-icons/md';
import { useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CreatePostButton.module.scss';
import { Icon } from '@/shared/ui/Icon';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { FileInput } from '@/shared/ui/FileInput';
import { Button } from '@/shared/ui/Button';

interface CreatePostButtonProps {
    className?: string;
}

export const CreatePostButton = (props: CreatePostButtonProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleChangeFile = (file: File) => {
        setSelectedFile(file);
    };

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (
        <div className={classNames(cls.CreatePostButton, {}, [className])}>
            <Icon
                svg={MdOutlineCreateNewFolder}
                width={36}
                height={36}
                onClick={handleOpen}
                clickable
                className={cls.icon}
            />
            <Modal
                isOpen={isOpen}
                onClose={handleClose}
                lazy
            >
                <VStack
                    max
                    gap="16"
                    className={cls.modalContent}
                >
                    <div className={cls.header}>
                        <Text
                            text="Create Post"
                            bold
                        />
                    </div>
                    <Input placeholder="Enter Description" />
                    <FileInput
                        onFileChange={handleChangeFile}
                        value={selectedFile}
                    />
                    <div className={cls.footer}>
                        <Button fullWidth>Create Post</Button>
                    </div>
                </VStack>
            </Modal>
        </div>
    );
};
