import { HStack } from '@/shared/ui/Stack';

import { ArchivesListItem } from '../ArchivesListItem/ArchivesListItem';

export const ArchivesList = () => {
    return (
        <HStack
            max
            gap="16"
            wrap="wrap"
        >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <ArchivesListItem
                    key={item}
                    item={item}
                />
            ))}
        </HStack>
    );
};
