import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
  const validate = Yup.object({
    name: Yup.string()
      .min(10, 'Adicione no minimo 10 caracteres')
      .required('O Nome é Obrigatório'),
    age: Yup.number()
        .required('A idade é Obrigatório'),
    cpf: Yup.string()
        .min(10, 'O CPF tem que ter 11 números')
        .max(10, 'O CPF tem que ter 11 números')
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
  })
  return (
    <Formik
      initialValues={{
        name: '',
        age: '',
        cpf: '',
        registration: '',
        course: '',
        address: '',
        number: '',
        compl: '',
        district: '',
        city: '',
        state: '',
        cep: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Cadastro de Aluno</h1>
          <Form>
            <TextField label="Nome Completo" name="name" type="text" />
            <TextField label="Idade" name="age" type="number" />
            <TextField label="CPF" name="cpf" type="number" />
            <TextField label="Matricula" name="registration" type="number" />
            <TextField label="Curso" name="course" type="text" />
            <TextField label="Endereco" name="address" type="text" />
            <TextField label="Numero" name="number" type="number" />
            <TextField label="Complemento" name="compl" type="text" />
            <TextField label="Bairro" name="district" type="text" />
            <TextField label="Cidade" name="city" type="text" />
            <TextField label="Estado" name="state" type="text" />
            <TextField label="CEP" name="cep" type="number" />



            <button className="btn btn-dark mt-3" type="submit" disabled={!formik.isValid}>Registrar</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Resetar</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
