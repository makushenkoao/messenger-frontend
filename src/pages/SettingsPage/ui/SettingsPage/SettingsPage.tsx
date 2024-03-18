import { Navigate, useParams } from 'react-router-dom';

import { getRouteSettings } from '@/shared/const/router';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { SettingsType } from '@/shared/types/settings';
import { AppLink } from '@/shared/ui/AppLink';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { BackIcon } from '@/widgets/BackIcon';

import { ChangePassword } from '../ChangePassword/ChangePassword';
import { ProfileEdit } from '../ProfileEdit/ProfileEdit';

import cls from './SettingsPage.module.scss';

const SettingsPage = () => {
    const { type } = useParams<{ type: SettingsType }>();

    if (!type) {
        return (
            <Navigate
                to={getRouteSettings('edit')}
                replace
            />
        );
    }

    const renderContent = () => {
        switch (type) {
            case 'edit':
                return <ProfileEdit />;
            case 'password':
                return <ChangePassword />;
            default:
                return <ProfileEdit />;
        }
    };

    return (
        <StickyContentLayout
            content={
                <HStack
                    gap="32"
                    align="start"
                >
                    <VStack
                        max
                        gap="32"
                    >
                        <Text title="Settings" />
                        {renderContent()}
                    </VStack>
                </HStack>
            }
            left={<BackIcon />}
            right={
                <Card
                    className={cls.sidebar}
                    padding="0"
                    border="normal"
                >
                    <VStack
                        gap="0"
                        max
                    >
                        <AppLink
                            to={getRouteSettings('edit')}
                            className={cls.link}
                            activeClassName={cls.active}
                        >
                            <Text text="Edit profile" />
                        </AppLink>
                        <AppLink
                            to={getRouteSettings('password')}
                            className={cls.link}
                            activeClassName={cls.active}
                        >
                            <Text text="Change password" />
                        </AppLink>
                    </VStack>
                </Card>
            }
        />
    );
};
export default SettingsPage;
