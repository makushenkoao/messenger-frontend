import { lazy } from 'react';

export const MessagesPageAsync = lazy(
    async () => await import('./MessagesPage'),
);
