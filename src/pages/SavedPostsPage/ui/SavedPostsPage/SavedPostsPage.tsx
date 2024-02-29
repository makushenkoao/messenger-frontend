import { BackIcon } from '@/widgets/BackIcon';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { SavedPostsList } from '../SavedPostsList/SavedPostsList';

const SavedPostsPage = () => {
    return (
        <StickyContentLayout
            left={<BackIcon />}
            content={
                <VStack
                    max
                    gap="16"
                >
                    <Text title="Saved Posts" />
                    <SavedPostsList />
                </VStack>
            }
        />
    );
};
export default SavedPostsPage;
