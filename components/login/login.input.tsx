import React, {FC} from 'react';
import {useFormContext} from "react-hook-form";
import {LoginValidation} from "@/utils/formValidations";
import {LoginInputs} from "@/pages/login";

const LoginInput: FC = () => {
    const { register } = useFormContext<LoginInputs>();

    return (
        <div className={'flex flex-col'}>
            <label htmlFor={'username'}>
                Email/Username
            </label>
            <input {...register('username', LoginValidation.username)} className={''} />
        </div>
    );
};

export default LoginInput;