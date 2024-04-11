import { memo } from 'react';
import { useSelector } from 'react-redux';

import { PostList } from '@/entities/Post';

import { getPostsError, getPostsLoading } from '../../model/selectors/posts';
import { getPosts } from '../../model/slices/postsSlice';

export const PostsInfiniteList = memo(() => {
    const posts = useSelector(getPosts.selectAll);
    const loading = useSelector(getPostsLoading);
    const error = useSelector(getPostsError);

    if (error) {
        return null;
    }

    return (
        <div>
            <PostList
                posts={posts}
                loading={loading}
            />
        </div>
    );
});
