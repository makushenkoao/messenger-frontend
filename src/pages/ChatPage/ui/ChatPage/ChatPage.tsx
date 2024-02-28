import { Chat, ChatList } from '@/entities/Message';
import { HStack } from '@/shared/ui/Stack';

const ChatPage = () => {
    return (
        <HStack
            max
            gap="16"
        >
            <ChatList />
            <Chat />
        </HStack>
    );
};
export default ChatPage;
