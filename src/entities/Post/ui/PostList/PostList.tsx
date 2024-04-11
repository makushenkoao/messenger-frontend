import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';

import { Post } from '../../model/types/post';
import { PostCard } from '../PostCard/PostCard';
import { PostCardSkeleton } from '../PostCardSkeleton/PostCardSkeleton';

interface PostListProps {
    loading?: boolean;
    posts?: Post[];
}

const getSkeletons = () =>
    new Array(3).fill(0).map((item, index) => <PostCardSkeleton key={index} />);

export const PostList = (props: PostListProps) => {
    const { loading, posts } = props;

    const renderPost = (post: Post, index: number) => (
        <PostCard
            // TODO:
            // key={post._id}
            key={index}
            post={post}
        />
    );

    if (!loading && !posts.length) {
        return (
            <Text
                size="m"
                bold
                text="You have looked at all the latest publications."
            />
        );
    }

    return (
        <VStack
            max
            gap="16"
            align="center"
        >
            {posts.length > 0 && posts.map(renderPost)}
            {loading && getSkeletons()}
        </VStack>
    );
};
