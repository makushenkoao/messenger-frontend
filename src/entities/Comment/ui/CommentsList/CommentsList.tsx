import { VStack } from '@/shared/ui/Stack';
import { CommentsListItem } from '../CommentsListItem/CommentsListItem';

export const CommentsList = () => {
    return (
        <VStack
            max
            gap="16"
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <CommentsListItem key={item} />
            ))}
        </VStack>
    );
};
