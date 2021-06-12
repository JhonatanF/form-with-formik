import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import { ValidateForm } from "./validation/validateForm";

export const Signup = () => {

  return (
    <Formik
      initialValues={{
        name: "",
        age: "",
        cpf: "",
        registration: "",
        course: "",
        address: "",
        number: "",
        compl: "",
        district: "",
        city: "",
        state: "",
        cep: "",
      }}
      validationSchema={ValidateForm}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">
            Cadastro de Aluno
          </h1>
          <Form>
            <TextField label="Nome Completo" name="name" type="text" />
            <TextField label="Idade" name="age" type="number" />
            <TextField label="CPF" name="cpf" type="number" />
            <TextField label="Curso" name="course" type="text" />
            <TextField label="Endereco" name="address" type="text" />
            <TextField label="Numero" name="number" type="number" />
            <TextField label="Complemento" name="compl" type="text" />
            <TextField label="Bairro" name="district" type="text" />
            <TextField label="Cidade" name="city" type="text" />
            <TextField label="Estado" name="state" type="text" />
            <TextField label="CEP" name="cep" type="number" />
            <TextField label="Matricula" name="registration" type="number" />
            <TextField label="Senha" name="password" type="password" />
            {/* <TextField label="Tipo (ALUNO ou PROFESSOR)" name="tipo" type="text" /> */}
            <div></div>
            <div className="mb-2">
              <label name="tipo">Tipo de Usuario</label>
              <select
                name="tipo"
                className={`form-control shadow-none ${true}`}
              >
                <option value="aluno" selected="selected">
                  ALUNO
                </option>
                <option value="professor">PROFESSOR</option>
              </select>
            </div>
            <button
              className="btn btn-dark mt-3"
              type="submit"
              disabled={!formik.isValid}
            >
              Registrar
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Resetar
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
