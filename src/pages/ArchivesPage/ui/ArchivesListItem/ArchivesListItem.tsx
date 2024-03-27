import PostImage from '@/shared/assets/images/post-image-1.png';
import { getRoutePostDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';

import cls from './ArchiveListItem.module.scss';

interface ArchivesListItemProps {
    item: number;
}

export const ArchivesListItem = (props: ArchivesListItemProps) => {
    const { item } = props;

    return (
        <AppLink
            className={cls.imageWrapper}
            to={getRoutePostDetails(`post-id-here-${item}`)}
        >
            <AppImage
                src={PostImage}
                width={500}
                height={500}
                className={cls.image}
            />
        </AppLink>
    );
};
