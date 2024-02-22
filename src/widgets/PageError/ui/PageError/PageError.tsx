import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

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
            className={classNames('app_redesigned', {}, [className])}
        >
            <Text title="An unexpected error occurred" />
            <Button
                variant="outline"
                onClick={reloadPage}
            >
                Refresh the page
            </Button>
        </VStack>
    );
};
