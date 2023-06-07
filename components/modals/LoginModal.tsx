"use client";

import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import React, { useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async () => {
        try {
            setIsLoading(true);
            //Add Login Functionality
            loginModal.onClose();
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    const onToggle = () => {
        if (isLoading) return;

        registerModal.onOpen();
        loginModal.onClose();
    };

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isLoading}
            />
            <Input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isLoading}
            />
        </div>
    );

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>
                New to Twitter?
                <span
                    className="text-white cursor-pointer hover:underline"
                    onClick={onToggle}
                >
                    {" "}
                    Create an account
                </span>
            </p>
        </div>
    );

    return (
        <Modal
            disabled={isLoading}
            title="Login"
            actionLabel="Sign in"
            onClose={loginModal.onClose}
            onSubmit={onSubmit}
            isOpen={loginModal.isOpen}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default LoginModal;
