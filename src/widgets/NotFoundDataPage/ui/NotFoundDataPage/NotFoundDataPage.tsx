import { useNavigate } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './NotFoundDataPage.module.scss';

interface PageErrorProps {
    className?: string;
}

export const NotFoundDataPage = ({ className }: PageErrorProps) => {
    const navigation = useNavigate();

    const handleBack = () => navigation(-1);

    return (
        <VStack
            max
            justify="center"
            align="center"
            gap="16"
            className={classNames(cls.NotFoundDataPage, {}, [className])}
        >
            <Text
                title="For some reason the data was not found"
                bold
            />
            <Button
                variant="outline"
                onClick={handleBack}
            >
                Return Back
            </Button>
        </VStack>
    );
};
