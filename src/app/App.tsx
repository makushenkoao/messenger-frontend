import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { useAppToolbar } from '@/app/lib/useAppToolbar';
import { AppRouter } from '@/app/providers/router';
import { withTheme } from '@/app/providers/ThemeProvider/ui/withTheme';
import { getUserAuthData, getUserMounted, initAuthData } from '@/entities/User';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

// TODO:
//  animation
//  skeletons(loaders)
//  notify about errors
//  =======================================
//  modify post details page
//  modify profile page
//  modify post card(display user data. when clicking on the user, redirect to the page)
//  send default avatar in register
//  send default image in post creation
//  integrate component FilesInput to FileInput
//  change services to trk
//  change navigation buttons to links

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

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <ToastContainer />
                {user ? (
                    <MainLayout
                        content={<AppRouter />}
                        header={<Navbar />}
                        sidebar={<Sidebar />}
                        toolbar={toolbar}
                    />
                ) : (
                    <AppRouter />
                )}
            </Suspense>
        </div>
    );
}

export default withTheme(App);
