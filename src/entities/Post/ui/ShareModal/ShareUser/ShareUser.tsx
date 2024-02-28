import { HStack } from '@/shared/ui/Stack';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Checkbox } from '@/shared/ui/Checkbox';
import AvatarImage from '@/shared/assets/images/avatar.png';
import cls from './ShareUser.module.scss';

interface ShareUserProps {
    onChange: (item: number) => void;
    checked: boolean;
    item: number;
}

export const ShareUser = (props: ShareUserProps) => {
    const { onChange, checked, item } = props;

    return (
        <HStack
            max
            justify="between"
            onClick={() => onChange(item)}
            className={cls.ShareUser}
        >
            <HStack gap="8">
                <Avatar
                    width={44}
                    height={44}
                    src={AvatarImage}
                />
                <Text
                    text="makushenkoao"
                    bold
                />
            </HStack>
            <Checkbox
                checked={checked}
                onChange={() => onChange(item)}
            />
        </HStack>
    );
};
