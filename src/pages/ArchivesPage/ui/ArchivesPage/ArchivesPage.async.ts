import { lazy } from 'react';

export const ArchivesPageAsync = lazy(
    async () => await import('./ArchivesPage'),
);
