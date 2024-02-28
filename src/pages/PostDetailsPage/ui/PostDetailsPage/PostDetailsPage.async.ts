import { lazy } from 'react';

export const PostDetailsPageAsync = lazy(
    async () => await import('./PostDetailsPage'),
);
