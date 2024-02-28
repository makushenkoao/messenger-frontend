import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
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

// TODO
//  ANIMATION
//  open post details in profile/archives
//  app details (comments)

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

    // if (!user) {
    //         return (
    //             <div className={classNames('app', {}, [theme])}>
    //                 <Auth />
    //             </div>
    //         );
    //     }

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
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
