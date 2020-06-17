import React,{useState} from 'react'
import './styles.css';
import img from '../../img/logo.png'
import { Link,useHistory } from 'react-router-dom'
import api from '../../services'
function Login() {

    const [data,setData] = useState({
        email: '',
        password: ''
    })

    const history = useHistory()

    function handleInputChangle(event) {
        const { name, value } = event.target
        setData({
            ...data, [name]: value
        })
    }

    async function handleSubmit(event){
        event.preventDefault()
        const{email,password} = data
        await api.post('/',{email,password})
            .then((res) => {
                localStorage.setItem('userTask',JSON.stringify(res.data))
                history.go('/task')
            }).catch((er) => {
                document.getElementById('loginValidate').classList.remove('d-none')
                document.getElementById('loginValidate').classList.add('d-flex')
            })
       
    }
    return (
        <div className="container-fluid m-0 p-0">
            <div className="d-flex justify-content-center login-container">
                <div className="card  justify-content-center  px-5  py-1  border-info">
                    <img src={img} className="img-fluid  logo" alt="Logo Task" />
                    <form className="mt-5  px-1"onSubmit={handleSubmit}>
                        <div className="form-group mx-3 ">
                            <label htmlFor="email1">Email</label>
                            <input type="email" className="form-control" id="email1Login" name="email" aria-describedby="email" onChange={handleInputChangle}></input>
                        </div>
                        <div className="form-group mx-3">
                            <label htmlFor="password">Senha</label>
                            <input type="password" className="form-control" id="passwordLogin" name="password" onChange={handleInputChangle}></input>

                        </div>
                        <div id="loginValidate" className=" d-none justify-content-center validet mb-2">
                            Email ou Senha invalido
                        </div>
                        <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-center mx-3 ">Entrar</button>
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