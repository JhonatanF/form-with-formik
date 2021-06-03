import React from 'react';
import { TextField } from './TextField';
import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Home } from './Home'

export const Login = () => {
    const ValidUsers = values => {
        var user = values.username;
        var pass = values.password;
        if(user === userAuth && pass === passAuth){
            ReactDOM.render(
                <Router>
                    <Route path="/Home" component={<Home />} />
                </Router>
            );

        }
    }
    

    var userAuth = "Admin";
    var passAuth = "Admin123";
    return(
        <Formik
            initialValues={{
                username: 'Admin',
                password: 'Admin123',
            }}
            >
                
            <div>
                <h1 className="my-4 font-weight-bold .display-4">Login</h1>
                <Form>
                    <TextField label="Username ou Email" name="username" type="text" />
                    <TextField label="Password" name="password" type="password" />
                    <Link className="btn btn-dark mt-3" to="/" onClick={ValidUsers}>Login</Link>
                    <Link className="btn btn-primary mt-3 ml-3" to="/Cadastro">Cadastro</Link>
                </Form>
            </div>
        </Formik>
        
    )
}