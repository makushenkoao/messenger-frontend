import { lazy } from 'react';

export const SavedPostsPageAsync = lazy(
    async () => await import('./SavedPostsPage'),
);
