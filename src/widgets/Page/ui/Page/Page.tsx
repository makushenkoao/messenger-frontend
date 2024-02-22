import {
    memo,
    MutableRefObject,
    ReactNode,
    useRef,
    UIEvent,
    useEffect,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import cls from './Page.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUIScrollByPath, uiActions } from '@/features/UI';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';
import { StateSchema } from '@/app/providers/StoreProvider';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getUIScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        triggerRef,
        wrapperRef: undefined,
        callback: onScrollEnd,
    });

    useEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    }, []);

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            uiActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    return (
        <main
            ref={wrapperRef}
            className={classNames(cls.PageRedesigned, {}, [className])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd && (
                <div
                    ref={triggerRef}
                    className={cls.trigger}
                />
            )}
        </main>
    );
});
