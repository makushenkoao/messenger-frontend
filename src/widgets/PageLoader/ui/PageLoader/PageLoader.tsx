import { TailSpin } from 'react-loader-spinner';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <TailSpin
                height={80}
                width={80}
                color="#5ed3f3"
                ariaLabel="loading"
            />
        </div>
    );
};
