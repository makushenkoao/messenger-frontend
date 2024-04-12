import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';

import { Post } from '../../model/types/post';
import { PostCard } from '../PostCard/PostCard';
import { PostCardSkeleton } from '../PostCardSkeleton/PostCardSkeleton';

interface PostListProps {
    loading?: boolean;
    posts?: Post[];
    wrap?: boolean;
}

const getSkeletons = () =>
    new Array(3).fill(0).map((item, index) => <PostCardSkeleton key={index} />);

export const PostList = (props: PostListProps) => {
    const { loading, posts, wrap } = props;

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

    if (wrap) {
        return (
            <HStack wrap="wrap" max gap="16" justify="center">
                {posts.length > 0 && posts.map(renderPost)}
                {loading && getSkeletons()}
            </HStack>
        );
    }

    return (
        <VStack
            max
            gap="16"
        >
            {posts.length > 0 && posts.map(renderPost)}
            {loading && getSkeletons()}
        </VStack>
    );
};
