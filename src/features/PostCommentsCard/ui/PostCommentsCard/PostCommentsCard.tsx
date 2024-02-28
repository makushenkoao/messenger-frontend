import { CommentsList } from '@/entities/Comment';
import { Card } from '@/shared/ui/Card';
import cls from './PostCommentsCard.module.scss';

export const PostCommentsCard = () => {
    return (
        <Card
            padding="16"
            max
            className={cls.PostCommentsCard}
        >
            <CommentsList />
        </Card>
    );
};
