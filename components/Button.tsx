import React from "react";

interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    outline?: boolean;
}

const Button = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    outline,
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`rounded-full font-semibold hover:opacity-80 trasition border-2 ${
                fullWidth ? "w-full" : "w-fit"
            } ${secondary ? "bg-white" : "bg-sky-500"}
            ${secondary ? "text-black" : "text-white"}
            ${secondary ? "border-black" : "border-sky-500"}
            ${large ? "px-5" : "px-4"}
            ${large ? "py-3" : "px-2"}
            ${outline ? "bg-transparent" : ""}
            ${outline ? "text-white" : ""}
            ${outline ? "border-white" : ""}
            ${disabled ? "cursor-not-allowed" : ""}
            ${disabled ? "opacity-70" : ""}
            `}
        >
            {label}
        </button>
    );
};

export default Button;
