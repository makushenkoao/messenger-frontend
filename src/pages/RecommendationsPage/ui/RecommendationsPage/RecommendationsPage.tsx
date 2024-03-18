import AvatarImage from '@/shared/assets/images/avatar.png';
import { getRouteProfile } from '@/shared/const/router';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { BackIcon } from '@/widgets/BackIcon';

const RecommendationsPage = () => {
    return (
        <StickyContentLayout
            content={
                <Card
                    max
                    padding="24"
                    border="partial"
                >
                    <VStack
                        max
                        gap="16"
                    >
                        <Text
                            title="Suggested"
                            bold
                        />
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                            <HStack
                                key={item}
                                max
                                justify="between"
                            >
                                <AppLink to={getRouteProfile('makushenkoao')}>
                                    <HStack gap="8">
                                        <Avatar
                                            width={50}
                                            height={50}
                                            src={AvatarImage}
                                        />
                                        <Text text="makushenkoao" />
                                    </HStack>
                                </AppLink>
                                <Button variant="filled">Follow</Button>
                            </HStack>
                        ))}
                    </VStack>
                </Card>
            }
            left={<BackIcon />}
        />
    );
};
export default RecommendationsPage;
