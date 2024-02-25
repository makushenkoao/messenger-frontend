import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { HStack, VStack } from '@/shared/ui/Stack';
import { AppLogo } from '@/shared/ui/AppLogo';
import { Icon } from '@/shared/ui/Icon';
import { AppLink } from '@/shared/ui/AppLink';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const sidebarItemsList = useSelector(getSidebarItems);
    const onToggle = (): void => setCollapsed((prevState) => !prevState);

    const itemsList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <aside
            data-testid="sidebar"
            className={classNames(
                cls.SidebarRedesigned,
                { [cls.collapsedRedesigned]: collapsed },
                [className],
            )}
        >
            <AppLink to="/">
                <AppLogo
                    className={cls.appLogo}
                    width={collapsed ? 40 : 60}
                    height={collapsed ? 40 : 60}
                />
            </AppLink>
            <VStack
                role="navigation"
                align={collapsed ? 'center' : 'start'}
                gap="4"
                className={classNames(
                    cls.items,
                    {
                        [cls.collapsedItems]: collapsed,
                    },
                    [],
                )}
            >
                {itemsList}
            </VStack>
            <Icon
                clickable
                onClick={onToggle}
                className={cls.collapseBtn}
                svg={ArrowIcon}
                width={40}
                height={40}
            />
            {collapsed ? (
                <VStack
                    align="center"
                    className={cls.switchers}
                    gap="4"
                >
                    <ThemeSwitcher />
                </VStack>
            ) : (
                <HStack
                    className={cls.switchers}
                    justify="center"
                    gap="8"
                >
                    <ThemeSwitcher />
                </HStack>
            )}
        </aside>
    );
});
