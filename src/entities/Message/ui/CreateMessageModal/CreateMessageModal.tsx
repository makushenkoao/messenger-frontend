import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Modal } from '@/shared/ui/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { getRouteChat } from '@/shared/const/router';
import AvatarImage from '@/shared/assets/images/avatar.png';
import cls from './CreateMessageModal.module.scss';

interface CreateMessageModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const CreateMessageModal = (props: CreateMessageModalProps) => {
    const { isOpen, onClose } = props;
    const navigation = useNavigate();

    const handleChatClick = (item: number) => {
        navigation(getRouteChat(`chat-id-here-${item}`));
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            padding="none"
        >
            <div className={cls.content}>
                <HStack
                    max
                    justify="between"
                    className={cls.header}
                >
                    <div className={cls.close} />
                    <Text
                        text="New Message"
                        bold
                    />
                    <Icon
                        svg={MdClose}
                        className={cls.close}
                        width={36}
                        height={36}
                        clickable
                        onClick={onClose}
                    />
                </HStack>
                <div className={cls.inputWrapper}>
                    <Input placeholder="Search" />
                </div>
                <VStack
                    className={cls.list}
                    max
                    gap="0"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                        (item) => (
                            <HStack
                                key={item}
                                max
                                justify="between"
                                className={cls.userListItem}
                                onClick={() => handleChatClick(item)}
                            >
                                <HStack gap="8">
                                    <Avatar
                                        src={AvatarImage}
                                        width={44}
                                        height={44}
                                    />
                                    <div>
                                        <Text
                                            text="makushemkoao"
                                            bold
                                        />
                                        <Text
                                            text="Anton Makushenko"
                                            size="s"
                                            className={cls.name}
                                        />
                                    </div>
                                </HStack>
                                <Button
                                    className={cls.button}
                                    variant="clear"
                                >
                                    Chat
                                </Button>
                            </HStack>
                        ),
                    )}
                </VStack>
            </div>
        </Modal>
    );
};
