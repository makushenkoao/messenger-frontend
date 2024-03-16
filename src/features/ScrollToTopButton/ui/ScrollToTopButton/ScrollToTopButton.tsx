import { memo } from 'react';
import { MdOutlineArrowCircleUp } from 'react-icons/md';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';

import cls from './ScrollToTopButton.module.scss';

interface ScrollToTopButtonProps {
    className?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
    const { className } = props;

    const onCLick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Icon
            className={classNames(cls.icon, {}, [className])}
            svg={MdOutlineArrowCircleUp}
            clickable
            width={40}
            height={40}
            onClick={onCLick}
        />
    );
});
