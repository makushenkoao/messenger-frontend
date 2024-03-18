import { lazy } from 'react';

export const RecommendationsPageAsync = lazy(
    async () => await import('./RecommendationsPage'),
);
