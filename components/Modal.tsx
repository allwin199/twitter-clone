import React, { ReactElement, useCallback } from "react";

interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: ReactElement;
    footer?: ReactElement;
    actionLabel: string;
    disabled?: boolean;
}

const Modal = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled = false,
}: ModalProps) => {
    const handleClose = useCallback(() => {
        if (disabled) return;
        onClose();
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) return;
        onSubmit();
    }, [disabled, onSubmit]);

    if (!isOpen) return null;

    return (
        <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800 bg-opacity-70">
                <div className="relative w-full lg:w-3/6 my-6 mx-auto lg:max-w-3xl h-full lg:h-auto">
                    {/* Content */}
                    <div className="h-full lg:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline focus:outline-none p-4">
                        {/* Header */}
                        <div className=""></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
