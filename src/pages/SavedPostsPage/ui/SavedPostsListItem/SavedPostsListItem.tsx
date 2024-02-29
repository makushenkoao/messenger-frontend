import { getRoutePostDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import PostImage from '@/shared/assets/images/image-post.png';
import cls from './SavedPostsListItem.module.scss';

interface ArchivesListItemProps {
    item: number;
}

export const SavedPostsListItem = (props: ArchivesListItemProps) => {
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
