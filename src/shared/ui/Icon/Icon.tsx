import React, { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
    className?: string;
    svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    disabled?: boolean;
}

interface NonClickableIconProps extends IconBaseProps {
    clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
    clickable: true;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
    const {
        className,
        svg: Svg,
        width = 32,
        height = 32,
        clickable,
        disabled,
        ...otherProps
    } = props;

    const icon = (
        <Svg
            className={classNames(cls.Icon, {}, [className])}
            width={width}
            height={height}
            {...otherProps}
            onClick={undefined}
        />
    );

    if (clickable) {
        return (
            <button
                type="button"
                className={classNames(
                    cls.button,
                    { [cls.disabled]: disabled },
                    [],
                )}
                onClick={props.onClick}
                disabled={disabled}
                style={{ height, width }}
            >
                {icon}
            </button>
        );
    }

    return icon;
});
