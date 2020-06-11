import React from 'react'
import './styles.css'
import img from '../../img/logo2.png'
import Filter from '../filter'
import Search from '../search'
import Task from '../task'
export default function TaskPag() {
    return (
        <div className="container-fluid">
            <div className="row " id="header">
                <div className="col-3">
                    <img src={img} className="img-fluid mt-3 logo2" alt="Logo Task" />
                </div>
                <div className="col-7 mt-4">
                    <Search />
                </div>
                <div className="col-2 mt-4 ">
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
                        <div className="col-2 my-4 ">
                            <button type="button" className="btn btn-light  px-3 buttonAdd">
                                Adicionar Tarefa
                            </button>
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-1">
                            <Task />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-1 ">
                            <Task />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-1">
                            <Task />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-1">
                            <Task />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}