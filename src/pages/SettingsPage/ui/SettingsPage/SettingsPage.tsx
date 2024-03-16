import { ResetPasswordButton } from '@/features/ResetPasswordButton';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

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
