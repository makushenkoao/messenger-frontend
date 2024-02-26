import { useState } from 'react';
import { FileInput } from '@/shared/ui/FileInput';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';

const CreatePostPage = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleChangeFile = (file: File) => {
        console.log(file);
        setSelectedFile(file);
    };

    const handleCreatePost = () => {
        console.log('Handle Post');
    };

    return (
        <div>
            <VStack
                max
                gap="16"
            >
                <Text title="Create Post" />
                <Input placeholder="Enter Description" />
                <FileInput
                    value={selectedFile}
                    onFileChange={handleChangeFile}
                />
                <HStack
                    max
                    justify="end"
                >
                    <Button onClick={handleCreatePost}>Create</Button>
                </HStack>
            </VStack>
        </div>
    );
};
export default CreatePostPage;
