import { MdClose } from 'react-icons/md';
import { Modal } from '@/shared/ui/Modal';
import { Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';
import { Button } from '@/shared/ui/Button';
import { Avatar } from '@/shared/ui/Avatar';
import { Input } from '@/shared/ui/Input';
import AvatarImage from '@/shared/assets/images/avatar.png';
import cls from './ProfileFollowing.module.scss';

interface ProfileFollowingProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ProfileFollowing = (props: ProfileFollowingProps) => {
    const { isOpen, onClose } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            padding="none"
        >
            <VStack
                className={cls.content}
                gap="16"
            >
                <HStack
                    max
                    justify="between"
                    className={cls.header}
                >
                    <div className={cls.close} />
                    <Text
                        text="Following"
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
                    gap="8"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                        (item) => (
                            <HStack
                                key={item}
                                max
                                justify="between"
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
                                <Button variant="clear">
                                    {item % 2 === 0 ? 'Remove' : 'Follow'}
                                </Button>
                            </HStack>
                        ),
                    )}
                </VStack>
            </VStack>
        </Modal>
    );
};
