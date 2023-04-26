import React, {FC} from 'react';
import LoginForm from "@/components/login/login.form";

const LoginPage: FC = () => {
    return (
        <div className={'bg-[#B41212] w-full h-screen flex flex-col items-center justify-center'}>
            <LoginForm />
        </div>
    );
};

export { LoginPage };