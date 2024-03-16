import { ChangeEvent, memo, useId } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { HStack } from '../Stack';
import { Text } from '../Text';

import cls from './FileInput.module.scss';

interface FileInputProps {
    onFileChange: (file: File) => void;
    value: File | null;
    label?: string;
    disabled?: boolean;
}

export const FileInput = memo((props: FileInputProps) => {
    const { onFileChange, value, label, disabled } = props;
    const id = useId();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0];
        onFileChange(file);
    };

    return (
        <div className={cls.fileInputContainer}>
            <input
                type="file"
                onChange={handleFileChange}
                className={cls.customFileInput}
                id={`file-input-${id}`}
                disabled={disabled}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
                className={classNames(
                    cls.customFileLabel,
                    { [cls.disabled]: disabled },
                    [],
                )}
                htmlFor={`file-input-${id}`}
            >
                <Text text={label || 'Choose File'} />
            </label>
            <div>
                {value && (
                    <HStack gap="4">
                        <Text
                            text="Selected File:"
                            bold
                        />
                        <Text text={value.name} />
                    </HStack>
                )}
            </div>
        </div>
    );
});
