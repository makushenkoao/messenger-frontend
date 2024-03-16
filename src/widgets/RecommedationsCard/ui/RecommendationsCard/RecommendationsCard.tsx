import AvatarImage from '@/shared/assets/images/avatar.png';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './RecommendationsCard.module.scss';

export const RecommendationsCard = () => {
    return (
        <Card
            padding="16"
            variant="light"
            className={cls.RecommendationsCard}
        >
            <VStack
                max
                gap="8"
            >
                <HStack
                    max
                    justify="between"
                >
                    <Text
                        text="Recommendations for You"
                        bold
                    />
                    <Button variant="clear">All</Button>
                </HStack>
                <VStack
                    gap="8"
                    max
                >
                    {[1, 2, 3, 4, 5].map((item) => (
                        <HStack
                            max
                            key={item}
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
                            <Button variant="clear">Follow</Button>
                        </HStack>
                    ))}
                </VStack>
            </VStack>
        </Card>
    );
};
