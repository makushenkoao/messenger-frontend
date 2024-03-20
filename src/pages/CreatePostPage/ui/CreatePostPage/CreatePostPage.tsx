import { FormEvent } from 'react';

import { useCreatePost } from '@/entities/Post';
import { Button } from '@/shared/ui/Button';
import { FilesInput } from '@/shared/ui/FilesInput';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

const CreatePostPage = () => {
    const {
        handleCreatePost,
        handleChangePhotos,
        handleChangeData,
        photos,
        data,
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
                <FilesInput
                    values={photos}
                    disabled={loading}
                    onFilesChange={handleChangePhotos}
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
