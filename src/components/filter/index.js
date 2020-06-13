import React from 'react'
import './styles.css'
export default function filter() {
    return (
        <div className="filter">
            <form className="mx-2 row ">
                <div className="form-check col-12 col-md-4">
                    <input className="form-check-input" type="radio" name="prioridade" id="Todos" value="todos" checked></input>
                    <label className="form-check-label" htmlFor="Todos">
                        Todos
                </label>
                </div>
                <div className="form-check col-12 col-md-4">
                    <input className="form-check-input" type="radio" name="prioridade" id="priorAlta" value="alta"></input>
                    <label className="form-check-label" htmlFor="priorAlta">Prioridade Alta</label>
                </div>
                <div className="form-check col-12 col-md-4 ">
                    <input className="form-check-input" type="radio" name="prioridade" id="priorBaixa" value="baixa"></input>
                    <label className="form-check-label" htmlFor="priorBaixa">Prioridade Baixa
                </label>
                </div>
            </form>

        </div>
    )
}