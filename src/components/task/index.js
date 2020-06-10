import React from 'react'
import './styles.css'
import img from '../../img/logo.png'

export default function Task() {
    return (
        <div className="container-fluid">
            <div className="row " id="header">
                <div className="col-3">
                    <img src={img} className="img-fluid mt-3 logo" alt="Logo Task" />
                </div>
                <div className="col-7 mt-4">
                    <form className="form-inline">
                        <input className="form-control  mr-sm-3 search" type="search" placeholder="Search" aria-label="Search"></input>
                    </form>
                </div>
                <div className="col-2 mt-4 ">
                    <button type="button" className="btn btn-light  px-3">
                        <span className="glyphicon glyphicon-log-out"></span> Log out
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                        <label className="form-check-label" for="exampleRadios1">
                            Default radio
                      </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
                        <label className="form-check-label" for="exampleRadios2">
                            Second default radio
                        </label>
                    </div>

                </div>
                <div className="col-9"> Ols</div>
            </div>
        </div>
    )
}