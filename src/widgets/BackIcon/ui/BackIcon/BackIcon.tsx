import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';

import cls from './BackIcon.module.scss';

interface BackIconProps {
    className?: string;
}

export const BackIcon = (props: BackIconProps) => {
    const { className } = props;

    const navigation = useNavigate();

    const handleBack = () => navigation(-1);

    return (
        <Icon
            svg={MdKeyboardArrowLeft}
            width={50}
            height={50}
            clickable
            onClick={handleBack}
            className={classNames(cls.BackIcon, {}, [className])}
        />
    );
};
