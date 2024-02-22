import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Sidebar } from '@/widgets/Sidebar';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { withTheme } from '@/app/providers/ThemeProvider/ui/withTheme';
import { AppRouter } from '@/app/providers/router';
import { getUserAuthData, getUserMounted, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Navbar } from '@/widgets/Navbar';
import { useAppToolbar } from '@/app/lib/useAppToolbar';
import { Auth } from '@/features/Auth';

// TODO
//  ANIMATION
//  PAGE LOADER (FALLBACK)

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
        return <div>Loading...</div>;
    }

    if (!user) {
        return (
            <div className={classNames('app', {}, [theme])}>
                <Auth />
            </div>
        );
    }

    return (
        <div className={classNames('app', {}, [theme])}>
            <MainLayout
                content={<AppRouter />}
                header={<Navbar />}
                sidebar={<Sidebar />}
                toolbar={toolbar}
            />
        </div>
    );
}

export default withTheme(App);
