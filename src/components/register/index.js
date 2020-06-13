import React, { useState } from 'react'
import img from '../../img/logo.png'
import './styles.css';
import api from '../../services'
import {useHistory } from 'react-router-dom'


function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState('');
    const history = useHistory()
    function handleName(e) {
        const nome = e.target.value
        if (/\s/.test(nome)) {
            setName(nome)
        }
    }
    function handleEmail(e) {
        const testEmail = e.target.value
        const er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
        if (er.test(testEmail)) {
            setEmail(testEmail)
        }
    }
    function handlPassword(e) {
        if (!/\s/g.test(e.target.value)) {
            setPassword(e.target.value)
        }
    }
    function handlPasswordValidate(e) {
        if (!/\s/g.test(e.target.value)) {
            setPasswordValid(e.target.value)
        }

    }
    function handleSubmit(e) {
        e.preventDefault()
        if ((email !== '') && (password !== '') && (passwordValid !== '') && (name !== '') && (passwordValid === password)) {
            document.getElementById('validateName').classList.add('d-none')
            document.getElementById('validateEmail').classList.add('d-none')
            document.getElementById('validatePassword').classList.add('d-none')
            const data = {
                nome: name,
                email: email,
                password: password
            }
            api.post('register', data)
                .then((res) => {
                    localStorage.setItem('user',JSON.stringify(res))
                    history.go('/task')
                }).catch((er) => {
                    document.getElementById('emailRegister').classList.remove('d-none')
                    document.getElementById('emailRegister').classList.add('d-flex')
                })

        } else {
            if (name === '') {
                document.getElementById('validateName').classList.remove('d-none')
            } else {
                document.getElementById('validateName').classList.add('d-none')
            }
            if (email === '') {
                document.getElementById('validateEmail').classList.remove('d-none')
            }
            else {
                document.getElementById('validateEmail').classList.add('d-none')
            }
            if ((password === '') || (passwordValid === '') || (passwordValid !== password)) {
                document.getElementById('validatePassword').classList.remove('d-none')
            } else {
                document.getElementById('validatePassword').classList.add('d-none')
            }
        }

    }
    return (
        <div className="container-fluid m-0 p-0 ">
            <div className="d-flex justify-content-center register-container">
                <div className="card d-flex justify-content-center px-5  py-1  border-info">
                    <img src={img} className="img-fluid my-2" alt="Logo Task" />
                    <form className="mt-5  px-1" onSubmit={handleSubmit}>
                        <div id="emailRegister"className="form-group mx-3  justify-content-center  d-none validate">
                           Email já  cadastrado anteriormente
                        </div>
                        <div className="form-group mx-3">
                            <label htmlFor="name">Nome</label>
                            <input type="text" className="form-control" name="nome" id="name" onBlur={handleName} aria-describedby="name"></input>
                            <div id="validateName" className="validate d-none ">
                                Digite seu nome completo
                             </div>
                        </div>
                        <div className="form-group mx-3">
                            <label htmlFor="email1">Email</label>
                            <input type="email" className="form-control" id="email1" name="email" onBlur={handleEmail} aria-describedby="email"></input>
                            <div id="validateEmail" className="validate d-none">
                                Insira um e-mail válido
                            </div>
                        </div>
                        <div className="form-group mx-3">
                            <label htmlFor="password">Senha</label>
                            <input type="password" className="form-control" id="password" name="password" onBlur={handlPassword} aria-describedby="password"></input>
                        </div>
                        <div className="form-group mx-3">
                            <label htmlFor="password2">Confirme sua senha</label>
                            <input type="password" className="form-control" name="passwordValidate" onBlur={handlPasswordValidate} id="password2"></input>
                            <div id="validatePassword" className="validate d-none">
                                Senhas não conferem.
                             </div>
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