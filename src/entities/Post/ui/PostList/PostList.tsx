import { VStack } from '@/shared/ui/Stack';

import { PostCard } from '../PostCard/PostCard';

export const PostList = () => {
    return (
        <VStack
            max
            gap="16"
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <PostCard key={item} />
            ))}
        </VStack>
    );
};
