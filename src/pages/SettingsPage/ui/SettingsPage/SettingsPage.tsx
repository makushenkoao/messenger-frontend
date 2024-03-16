import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { ResetPasswordButton } from '@/features/ResetPasswordButton';

const SettingsPage = () => {
    return (
        <VStack
            max
            gap="16"
        >
            <Text title="Settings" />
            <ResetPasswordButton />
        </VStack>
    );
};
export default SettingsPage;
