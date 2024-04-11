import { Post } from '@/entities/Post';

export interface ProfilePostsSchema {
    loading?: boolean;
    error?: string;
    data: Post[];
}
