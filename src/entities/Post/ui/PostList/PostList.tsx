import { VStack } from '@/shared/ui/Stack';
import { Post } from '../Post/Post';

export const PostList = () => {
    return (
        <VStack
            max
            gap="16"
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <Post key={item} />
            ))}
        </VStack>
    );
};
