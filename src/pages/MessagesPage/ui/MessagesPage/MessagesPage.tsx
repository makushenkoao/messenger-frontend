import { ChatList, StartMessageCard } from '@/entities/Message';
import { HStack } from '@/shared/ui/Stack';

const MessagesPage = () => {
    return (
        <HStack
            max
            gap="16"
        >
            <ChatList />
            <StartMessageCard />
        </HStack>
    );
};
export default MessagesPage;
