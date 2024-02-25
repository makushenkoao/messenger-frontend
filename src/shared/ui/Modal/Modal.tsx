import React, { ReactNode, useEffect } from 'react';

import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';

type ModalPadding = 'none' | 'md';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    padding?: ModalPadding;
    lazy?: boolean;
}

const paddingClasses: Record<ModalPadding, string> = {
    none: cls.p0,
    md: cls.pmd,
};

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        padding = 'md',
        isOpen,
        onClose,
        lazy,
    } = props;

    const { isMounted, close, isClosing } = useModal({
        animationDelay: 300,
        onClose,
        isOpen,
    });
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    console.log(paddingClasses[padding]);

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames(cls.Modal, mods, [
                    className,
                    theme,
                    cls.modalNew,
                    paddingClasses[padding],
                ])}
            >
                <Overlay onClick={close} />
                <div className={cls.content}>{children}</div>
            </div>
        </Portal>
    );
};
