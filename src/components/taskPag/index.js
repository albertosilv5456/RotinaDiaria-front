import React from 'react'
import './styles.css'
import img from '../../img/logo2.png'
import Filter from '../filter'
import Search from '../search'
import Task from '../task'
import AddTask from '../AddTask'
export default function TaskPag() {
    return (
        <div className="container-fluid">
            <div className="row mb-2" id="header">
                <div className="col-6 col-md-3 order-1 order-md-1">
                    <img src={img} className="img-fluid mt-1 logo2" alt="Logo Task" />
                </div>
                <div className="col-12 col-md-6 order-3 order-md-2 my-3">
                    <Search />
                </div>
                <div className="col-6 col-md-3 order-2 order-md-3 my-3 ">
                    <button type="button" className="btn btn-light  px-3">
                        <span className="glyphicon glyphicon-log-out"></span> Log out
                    </button>
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col-12 col-sm-4 col-md-3  col-lg-2  filter">
                    <Filter />
                </div>
                <div className="col-12 col-sm-8 col-md-9  col-lg-10 ">
                    <div className="row ">
                        <div className="col-12 my-4 ">
                            <h4>Bem Vindo, Jose!</h4>
                        </div>
                        <div className="col-12 my-3 ">
                            <AddTask/>
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