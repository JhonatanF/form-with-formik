import React from "react";
import { TextField } from "./TextField";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ValidateLogin } from "./validation/ValidateLogin";
// import { Home } from './Home'

export const Login = () => {
  
    const initialValues = {
        username: "",
        password: ""
      };
      function onSubmit(values) {
        // Do stuff here...
        alert(JSON.stringify(values, null, 2));
        console.log(values.username);
        console.log(values.password);
      }

  return (
    <Formik {...{ initialValues, ValidateLogin, onSubmit }}
    >
        {({ getFieldProps, handleSubmit }) => (
      <div>
        <h1 className="my-4 font-weight-bold .display-4">Login</h1>
        <Form 
        onSubmit={handleSubmit}>
          <TextField
            label="Username"
            name="username"
            type="text"
            // value={formik.values}
            {...getFieldProps("username")}
          />
          {/* <TextField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <label htmlFor="password">Senha</label>
          <input
            className={`form-control shadow-none`}
            type="password"
            // name="password"
            {...getFieldProps("password")}
          />
          <button className="btn btn-dark mt-3" type="submit">
            Login
          </button>
          <Link className="btn btn-primary mt-3 ml-3" to="/Cadastro">
            Cadastro
          </Link>
        </Form>
      </div>
        )}
    </Formik>
  );
};
