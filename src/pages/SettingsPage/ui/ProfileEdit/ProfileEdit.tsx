import { FormEvent, useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { FileInput } from '@/shared/ui/FileInput';
import { Input } from '@/shared/ui/Input';
import { VStack } from '@/shared/ui/Stack';

import cls from './ProfileEdit.module.scss';

export const ProfileEdit = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleChangeFile = (file: File) => {
        setSelectedFile(file);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Profile Update Submit');
    };

    return (
        <form
            className={cls.content}
            onSubmit={onSubmit}
        >
            <VStack
                max
                gap="16"
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
                <Button
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
            </VStack>
        </form>
    );
};
