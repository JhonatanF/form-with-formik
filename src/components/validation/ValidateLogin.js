import React from 'react';
import * as Yup from 'yup';

export const ValidateLogin = () => { 
    return (
        Yup.object({
            registration: Yup.string()
                .min(9, 'A matricula tem que ter 9 números')
                .max(9, 'A matricula tem que ter 9 números')
                .required('A matricula é Obrigatório')
                .matches(/^[0-9]+$/, "Digite somente numeros"),
            password: Yup.string()
                .required('A senha é Obrigatória'),
        })
    )
}