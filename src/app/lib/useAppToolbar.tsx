import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/const/router';
import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.HOME]: <ScrollToolbar />,
        [AppRoutes.POST_DETAILS]: <ScrollToolbar />,
        [AppRoutes.SAVED_POSTS]: <ScrollToolbar />,
        [AppRoutes.ARCHIVES]: <ScrollToolbar />,
        [AppRoutes.PROFILE]: <ScrollToolbar />,
        [AppRoutes.SEARCH]: <ScrollToolbar />,
    };

    return toolbarByAppRoute[appRoute];
}
