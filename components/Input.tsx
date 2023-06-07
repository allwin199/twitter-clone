import React from "react";

interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string;
    disabled?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    placeholder,
    value,
    type,
    disabled,
    onChange,
}: InputProps) => {
    return (
        <input
            disabled={disabled}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="
            w-full
            p-4
            text-lg
            bg-black
            border-2
            border-neutral-800
            rounded-md
            outline-none
            text-white
            focus:border-sky-500
            focus:border-2
            disabled:bg-neutral-900
            disabled:opacity-70
            disabled:cursor-not-allowed
            "
        />
    );
};

export default Input;
