import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return(
        <div className="Navbar">
            <div className="HomePage">
                <Link to="/">Home Page</Link>
            </div>
            <div className="Cadastro">
                <Link to="/cadastro">Cadastro</Link>
            </div>
            <div className="Sobre">
                <Link to="/sobre">Sobre</Link>
            </div>
        </div>
    )
}