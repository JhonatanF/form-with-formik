import React from 'react';
import * as Yup from 'yup';

export const ValidateForm = () => { 

    return (
        Yup.object({
            name: Yup.string()
            .min(10, 'Adicione no minimo 10 caracteres')
            .required('O Nome é Obrigatório'),
            age: Yup.number()
                .required('A idade é Obrigatório'),
            cpf: Yup.string()
                .min(11, 'O CPF tem que ter 11 números')
                .max(11, 'O CPF tem que ter 11 números')
                .required('O CPF é Obrigatório')
                .matches(/^[0-9]+$/, "Digite somente numeros"),
            registration: Yup.string()
                .min(9, 'A matricula tem que ter 9 números')
                .max(9, 'A matricula tem que ter 9 números')
                .required('A matricula é Obrigatório')
                .matches(/^[0-9]+$/, "Digite somente numeros"),
            course: Yup.string()
                .required('O Curso é Obrigatório'),
            address: Yup.string()
                .required('O Endereço é Obrigatório'),
            number: Yup.number(),
            compl: Yup.string(),
            district: Yup.string()
                .required('O Bairro é Obrigatório'),
            city: Yup.string()
                .required('A cidade é Obrigatório'),
            state: Yup.string()
                .required('O Estado é Obrigatório'),
            cep: Yup.number()
                .required('O CEP é Obrigatório'),
            password: Yup.string()
                .required('A senha é Obrigatória'),
        })
    )
}