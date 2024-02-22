import { VStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';
import cls from './ScrollToolbar.module.scss';

export const ScrollToolbar = ({ className }: { className?: string }) => {
    return (
        <VStack
            align="center"
            max
            justify="center"
            className={classNames(cls.ScrollToolbar, {}, [className])}
        >
            <ScrollToTopButton />
        </VStack>
    );
};
