import React, { useEffect, useState } from 'react'
import './styles.css'
import img from '../../img/logo2.png'
import userImg from '../../img/img.jpeg'
import Filter from '../filter'
import Search from '../search'
import Task from '../task'
import AddTaskModal from'../AddTask'
import { useHistory } from 'react-router-dom'
import api from '../../services'
export default function TaskPag() {
    const [user, setUser] = useState({
        id: 0,
        name: '',
        email: ''
    })
    const [taskAll, setTaskAll] = useState([])
    const [token, setToken] = useState('')
    const history = useHistory()
    useEffect(() => {
            const loginUser = JSON.parse(localStorage.getItem('user'))
            setToken(loginUser.token)
            setUser({
                name: loginUser.user.nome,
                email: loginUser.user.email,
                id: loginUser.user._id
            })
            const config = {
                headers: { Authorization: `Bearer ${loginUser.token}` }
            };
            api.get(`/${loginUser.user._id}/tarefas`, config).then((res) => {
                    setTaskAll(res.data)
            })
    }, [])

    function logout() {       
        localStorage.removeItem('user')
        history.go('/')
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-between" id="header">
                <div className="order-1 order-md-1">
                    <img src={img} className="img-fluid mt-3 mx-2 logo2" alt="Logo Task" />
                </div>
                <div className="order-3 order-md-2 m-3">
                    <Search />
                </div>
                <div className="order-2 order-md-3 mt-1 ">
                    <div className="dropdown">
                        <a className="nav-link dropdown userButton mx-2" href="#" id="dropdownMenuButton" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span className="mr-2 ">{user.name}</span>
                            <img className="rounded-circle user" src={userImg} />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Profile</a>
                            <hr />
                            <button className="dropdown-item" onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col-12">
                    <div className="row my-4 justify-content-around">
                        <div className="">
                            <h4>Bem Vindo, {user.name}!</h4>
                        </div>
                        <div className="m-2">
                            <Filter setTaskAll={setTaskAll}  />
                        </div>
                        <div className="">
                            <AddTaskModal setTaskAll={setTaskAll} user={user} token={token}/>
                        </div>
                    </div>
                    <div className="row justify-content-around">
                       {taskAll.map(task =>(
                           <div className="col-12  col-md-6 col-lg-4 col-xl-3 my-1">
                           <Task setTaskAll={setTaskAll} task={task}/>
                       </div>
                       ))}
                    </div>
                </div>
            </div>
        </div>
    )
}