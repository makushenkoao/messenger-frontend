import { SavedPostsListItem } from '../SavedPostsListItem/SavedPostsListItem';
import { HStack } from '@/shared/ui/Stack';

export const SavedPostsList = () => {
    return (
        <HStack
            max
            gap="16"
            wrap="wrap"
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <SavedPostsListItem
                    key={item}
                    item={item}
                />
            ))}
        </HStack>
    );
};
