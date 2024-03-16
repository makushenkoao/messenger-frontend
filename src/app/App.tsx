import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { withTheme } from '@/app/providers/ThemeProvider/ui/withTheme';
import { getUserAuthData, getUserMounted, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { useAppToolbar } from '@/app/lib/useAppToolbar';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { AppRouter } from '@/app/providers/router';
import { Auth } from '@/features/Auth';

// TODO:
//  move auth from user entity to auth feature
//  complete authentication
//  make private routes and add the authentication route to public
//  eslint imports
//  fix notify error
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
