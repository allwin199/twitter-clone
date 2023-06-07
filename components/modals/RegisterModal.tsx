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
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [isloading, setIsLoading] = useState(false);

    const onSubmit = async () => {
        try {
            setIsLoading(true);
            //Add Login Functionality
            registerModal.onClose();
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    };

    const onToggle = () => {
        if (isloading) return;

        registerModal.onClose();
        loginModal.onOpen();
    };

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isloading}
            />
            <Input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isloading}
            />
            <Input
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                disabled={isloading}
            />
            <Input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                disabled={isloading}
            />
        </div>
    );

    const footerContent = (
        <div className="text-neutral-400 text-center mt-4">
            <p>
                Already have an account?
                <span
                    className="text-white cursor-pointer hover:underline"
                    onClick={onToggle}
                >
                    {" "}
                    Signin
                </span>
            </p>
        </div>
    );

    return (
        <Modal
            disabled={isloading}
            title="Create an account"
            actionLabel="Register"
            onClose={registerModal.onClose}
            onSubmit={onSubmit}
            isOpen={registerModal.isOpen}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default LoginModal;
