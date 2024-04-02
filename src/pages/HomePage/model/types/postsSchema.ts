import { EntityState } from '@reduxjs/toolkit';

import { Post } from '@/entities/Post';

export interface PostsSchema extends EntityState<Post> {
    loading?: boolean;
    error?: string;
    skip: number;
    limit: number;
    hasMore: boolean;
    _inited: boolean;
}
