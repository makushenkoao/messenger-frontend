import { useNavigate } from 'react-router-dom';

import AvatarImage from '@/shared/assets/images/avatar.png';
import { getRouteProfile } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './SearchPage.module.scss';

const SearchPage = () => {
    const navigate = useNavigate();

    const handleNavigateToProfile = () => {
        navigate(getRouteProfile('makushenkoao'));
    };

    return (
        <div className={classNames(cls.SearchPage, {})}>
            <VStack
                max
                gap="32"
            >
                <Card
                    padding="24"
                    max
                >
                    <HStack
                        max
                        gap="16"
                    >
                        <Input placeholder="Search" />
                        <Button>Search</Button>
                    </HStack>
                </Card>
                <VStack
                    max
                    gap="8"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                        <Card
                            key={item}
                            padding="16"
                            max
                            className={cls.userCard}
                            onClick={handleNavigateToProfile}
                        >
                            <HStack
                                max
                                justify="between"
                            >
                                <HStack gap="8">
                                    <Avatar
                                        src={AvatarImage}
                                        width={44}
                                        height={44}
                                    />
                                    <Text
                                        text="makushenkoao"
                                        bold
                                    />
                                </HStack>
                                <Button
                                    onClick={handleNavigateToProfile}
                                    variant="filled"
                                >
                                    View
                                </Button>
                            </HStack>
                        </Card>
                    ))}
                </VStack>
            </VStack>
        </div>
    );
};
export default SearchPage;
