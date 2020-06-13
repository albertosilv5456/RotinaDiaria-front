import React,{useEffect,useState} from 'react'
import './styles.css'
import img from '../../img/logo2.png'
import user from '../../img/img.jpeg'
import Filter from '../filter'
import Search from '../search'
import Task from '../task'
import AddTask from '../AddTask'
import {useHistory } from 'react-router-dom'
export default function TaskPag() {
    const history = useHistory()
    useEffect(()=>{
        let loginUser = JSON.parse(localStorage.getItem('user'))
        console.log(loginUser)
    },[])
    function logout(){
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
                            <span className="mr-2 ">Jose</span>
                            <img className="rounded-circle user" src={user} />
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
                            <h4>Bem Vindo, Jose!</h4>
                        </div>
                        <div className="m-2">
                            <Filter />
                        </div>
                        <div className="">
                            <AddTask />
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-1">
                            <Task />
                        </div>
                        <div className="col-12  col-md-6 col-lg-4 col-xl-3 my-1 ">
                            <Task />
                        </div>
                        <div className="col-12  col-md-6 col-lg-4 col-xl-3 my-1">
                            <Task />
                        </div>
                        <div className="col-12  col-md-6 col-lg-4 col-xl-3 my-1">
                            <Task />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}