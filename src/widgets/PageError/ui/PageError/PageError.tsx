import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <VStack
            max
            justify="center"
            align="center"
            gap="16"
            className={classNames(cls.PageError, {}, ['app', className])}
        >
            <Text title="An Unexpected Error Occurred!" />
            <Button
                variant="outline"
                onClick={reloadPage}
            >
                Refresh the Page
            </Button>
        </VStack>
    );
};
