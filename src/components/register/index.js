import React from 'react'
import img from '../../img/logo.png'
import './styles.css';

import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="container-fluid login-container">
            <div className="d-flex justify-content-center">
                <div className="card d-flex justify-content-center px-5  py-3  border-info">
                    <img src={img} className="img-fluid my-3" alt="Responsive image" />
                    <form className="mt-5  px-1">
                        <fieldset>
                            <legend className="my-4">
                                <h3 className="text-center">Realizar cadastro</h3>
                            </legend>
                            <div className="form-group mx-3">
                                <input type="text" className="form-control px-2" name="name" id="name" placeholder="Digite seu nome"></input>
                            </div>
                            <div className="form-group mx-3">
                                <input type="email" className="form-control" name="email" placeholder="Digite seu email" id="email"></input>
                            </div>
                            <div className="form-group mx-3">
                                <input type="password" className="form-control" placeholder="Digite sua senha" name="whatsapp" id="whatsapp"></input>
                            </div>
                            <div className="form-group mx-3">
                                <input type="password" className="form-control" placeholder="Confirme sua senha" name="whatsapp" id="whatsapp"></input>
                            </div>

                        </fieldset>
                        <div></div>
                        <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary mx-3 btn-center ">Registrar</button>
                        </div>
                        
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Register;