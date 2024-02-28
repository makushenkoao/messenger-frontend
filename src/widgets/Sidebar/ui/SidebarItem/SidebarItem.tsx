import { memo } from 'react';
import { SidebarItemTypes } from '../../model/types/sidebar';
import { AppLink } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemTypes;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { item, collapsed } = props;

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.SidebarItemRedesigned, {
                [cls.collapsedRedesigned]: collapsed,
            })}
            activeClassName={cls.active}
        >
            <Icon
                svg={item.icon}
                className={cls.icon}
            />
            <span className={cls.link}>{item.text}</span>
        </AppLink>
    );
});
