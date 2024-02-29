import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { ListBox, ListBoxItem } from '@/shared/ui/Popups';
import { FileInput } from '@/shared/ui/FileInput';
import cls from './ProfileEditModal.module.scss';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';

interface ProfileEditModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const items: ListBoxItem<string>[] = [
    { value: '1', content: 'Option 1' },
    { value: '2', content: 'Option 2' },
    { value: '3', content: 'Option 3' },
    { value: '4', content: 'Option 4' },
    { value: '5', content: 'Option 5' },
    { value: '6', content: 'Option 6' },
    { value: '7', content: 'Option 7' },
    { value: '8', content: 'Option 8' },
];

export const ProfileEditModal = (props: ProfileEditModalProps) => {
    const { isOpen, onClose } = props;
    const [selectedValue, setSelectedValue] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleChangeFile = (file: File) => {
        setSelectedFile(file);
    };

    const handleChange = (value: string) => {
        setSelectedValue(value);
    };

    const onSubmit = () => {
        console.log(selectedFile, selectedValue);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            padding="none"
            lazy
        >
            <div className={cls.content}>
                <HStack
                    max
                    justify="between"
                    className={cls.header}
                >
                    <div className={cls.close} />
                    <Text
                        text="Profile Edit"
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
                <VStack
                    max
                    gap="16"
                    className={cls.form}
                >
                    <Input placeholder="Enter First Name" />
                    <Input placeholder="Enter Last Name" />
                    <Input placeholder="Enter Nickname" />
                    <Input placeholder="Enter Bio" />
                    <FileInput
                        value={selectedFile}
                        onFileChange={handleChangeFile}
                        label="Choose Avatar"
                    />
                    <ListBox
                        items={items}
                        value={selectedValue}
                        onChange={handleChange}
                        defaultValue="Select profile type"
                        direction="top left"
                        overflow="auto"
                        height={150}
                    />
                </VStack>
                <div className={cls.buttonWrapper}>
                    <Button
                        onClick={onSubmit}
                        fullWidth
                    >
                        Update
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
