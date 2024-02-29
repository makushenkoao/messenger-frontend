import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { BackIcon } from '@/widgets/BackIcon';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { ArchivesList } from '../ArchivesList/ArchivesList';

const ArchivesPage = () => {
    return (
        <StickyContentLayout
            left={<BackIcon />}
            content={
                <VStack
                    max
                    gap="16"
                >
                    <Text title="Archives" />
                    <ArchivesList />
                </VStack>
            }
        />
    );
};
export default ArchivesPage;
