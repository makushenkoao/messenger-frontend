import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { BackIcon } from '@/widgets/BackIcon';

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
