import { FormEvent } from 'react';

import { useCreatePost } from '@/entities/Post';
import { Button } from '@/shared/ui/Button';
import { FileInput } from '@/shared/ui/FileInput';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

const CreatePostPage = () => {
    const {
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
        <form onSubmit={onSubmit}>
            <VStack
                max
                gap="16"
            >
                <Text title="Create Post" />
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
                <FileInput
                    value={selectedFile}
                    onFileChange={handleChangeFile}
                    disabled={loading}
                />
                <HStack
                    max
                    justify="end"
                >
                    <Button
                        type="submit"
                        disabled={loading}
                    >
                        Create
                    </Button>
                </HStack>
            </VStack>
        </form>
    );
};
export default CreatePostPage;
