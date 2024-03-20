import { ChangeEvent, memo, useId } from 'react';
import { MdClose } from 'react-icons/md';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Icon } from '../Icon';
import { HStack, VStack } from '../Stack';
import { Text } from '../Text';

import cls from './FilesInput.module.scss';

interface FileInputProps {
    onFilesChange: (files: File[]) => void;
    values: File[];
    label?: string;
    disabled?: boolean;
}

export const FilesInput = memo((props: FileInputProps) => {
    const { onFilesChange, values, label, disabled } = props;
    const id = useId();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;

        if (files) {
            const newFilesArray = Array.from(files);
            const updatedFiles = [...values, ...newFilesArray];
            onFilesChange(updatedFiles);
        }
    };

    const handleRemoveFile = (index: number) => {
        const updatedFiles = [...values];
        updatedFiles.splice(index, 1);
        onFilesChange(updatedFiles);
    };

    return (
        <div className={cls.fileInputContainer}>
            <input
                type="file"
                onChange={handleFileChange}
                className={cls.customFileInput}
                id={`file-input-${id}`}
                disabled={disabled}
                multiple
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
            <div className={classNames('', { [cls.disabled]: disabled }, [])}>
                {values.length > 0 && (
                    <VStack gap="4">
                        <Text
                            text="Selected File:"
                            bold
                        />
                        {values.map((file, index) => (
                            <HStack key={`${file.name}-${index}`}>
                                <Text text={file.name} />
                                <Icon
                                    svg={MdClose}
                                    width={28}
                                    height={28}
                                    className={cls.close}
                                    clickable
                                    disabled={disabled}
                                    onClick={() => handleRemoveFile(index)}
                                />
                            </HStack>
                        ))}
                    </VStack>
                )}
            </div>
        </div>
    );
});
