import React from 'react'
import './styles.css';
import img from '../../img/logo.png'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="container-fluid login-container">
            <div className="d-flex justify-content-center">
                <div className="card  px-5  py-3  border-info">
                    <img src={img} className="img-fluid my-3" alt="Logo Task" />
                    <form className="mt-5  px-1">
                        <div className="form-group mx-3 ">
                            <label htmlFor="email1">Email</label>
                            <input type="email" className="form-control" id="email1" aria-describedby="email"></input>
                        </div>
                        <div className="form-group mx-3">
                            <label htmlFor="password">Senha</label>
                            <input type="password" className="form-control" id="password"></input>

                        </div>
                        <Link to="/task"><button type="submit" className="btn btn-primary mx-3 ">Entrar</button></Link>
                        <div className="form-group mt-3 mx-3 mb-2">
                            <span>
                                Não tem uma conta?
                            </span>
                            <Link to="/register"><span className="pl-1" >Registre-se</span></Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Login;