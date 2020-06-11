import React from 'react'
import img from '../../img/logo.png'
import './styles.css';

//import { Link } from 'react-router-dom'

function Register() {
    return (
        <div className="container-fluid m-0 p-0 ">
            <div className="d-flex justify-content-center register-container">
                <div className="card d-flex justify-content-center px-5  py-1  border-info">
                    <img src={img} className="img-fluid my-2" alt="Logo Task" />
                    <form className="mt-5  px-1">
                            <div className="form-group mx-3">
                                <label htmlFor="name">Nome</label>
                                <input type="text" className="form-control" id="name" aria-describedby="name"></input>
                            </div>
                            <div className="form-group mx-3">
                                <label htmlFor="email1">Email</label>
                                <input type="email" className="form-control" id="email1" aria-describedby="email"></input>
                            </div>
                            <div className="form-group mx-3">
                            <label htmlFor="password">Senha</label>
                                <input type="password" className="form-control" id="password" aria-describedby="password"></input>
                            </div>
                            <div className="form-group mx-3">
                            <label htmlFor="password2">Confirme sua senha</label>
                                <input type="password" className="form-control"  name="password2" id="password2"></input>
                            </div>

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