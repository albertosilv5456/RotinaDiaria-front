import React from 'react'
import './styles.css';
import img from '../../img/logo.png'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="container-fluid m-0 p-0">
            <div className="d-flex justify-content-center login-container">
                <div className="card  justify-content-center  px-5  py-1  border-info">
                    <img src={img} className="img-fluid  logo" alt="Logo Task" />
                    <form className="mt-5  px-1">
                        <div className="form-group mx-3 ">
                            <label htmlFor="email1">Email</label>
                            <input type="email" className="form-control" id="email1" aria-describedby="email"></input>
                        </div>
                        <div className="form-group mx-3">
                            <label htmlFor="password">Senha</label>
                            <input type="password" className="form-control" id="password"></input>

                        </div>
                        <div className="d-flex justify-content-center">
                        <Link to="/task"><button type="submit" className="btn btn-primary btn-center mx-3 ">Entrar</button></Link>
                        </div>
                        
                        <div className="form-group my-3 mx-3 ">
                            <span>
                                Não tem uma conta?
                            </span>
                            <Link to="/register">Registre-se</Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Login;