import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { useAppToolbar } from '@/app/lib/useAppToolbar';
import { AppRouter } from '@/app/providers/router';
import { withTheme } from '@/app/providers/ThemeProvider/ui/withTheme';
import { getUserAuthData, getUserMounted, initAuthData } from '@/entities/User';
import { Auth } from '@/features/Auth';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

// TODO:
//  move auth from user entity to auth feature
//  complete authentication
//  make private routes and add the authentication route to public
//  skeletons

function App() {
    const { theme } = useTheme();
    const mounted = useSelector(getUserMounted);
    const dispatch = useAppDispatch();
    const toolbar = useAppToolbar();
    const user = useSelector(getUserAuthData);

    useEffect(() => {
        if (!mounted) {
            dispatch(initAuthData());
        }
    }, [dispatch, mounted]);

    if (!mounted) {
        return (
            <div className={classNames('app', {}, [theme])}>
                <AppLoaderLayout />
            </div>
        );
    }

    if (!user) {
        return (
            <div className={classNames('app', {}, [theme])}>
                <ToastContainer />
                <Auth />
            </div>
        );
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <ToastContainer />
                <MainLayout
                    content={<AppRouter />}
                    header={<Navbar />}
                    sidebar={<Sidebar />}
                    toolbar={toolbar}
                />
            </Suspense>
        </div>
    );
}

export default withTheme(App);
