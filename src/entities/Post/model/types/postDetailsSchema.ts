import { Post } from './post';

export interface PostDetailsSchema {
    loading?: boolean;
    error?: string;
    data: Post;
}
