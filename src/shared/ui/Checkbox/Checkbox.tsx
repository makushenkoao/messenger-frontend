import { MouseEventHandler } from 'react';
import { MdCheck } from 'react-icons/md';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Checkbox.module.scss';

interface CheckboxProps {
    className?: string;
    checked: boolean;
    onChange: () => void;
}

export const Checkbox = (props: CheckboxProps) => {
    const { className, checked, onChange } = props;

    const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
        event.stopPropagation();
        onChange();
    };

    return (
        <div
            className={classNames(
                cls.Checkbox,
                {
                    [cls.checked]: checked,
                },
                [className],
            )}
            onClick={handleClick}
        >
            {checked && <MdCheck className={cls.icon} />}
        </div>
    );
};
