import React from 'react'

export default function filter() {
    return (
        <>
            <h4 className="mt-3"> Filtrar</h4>
            <hr />
            <h5>Prioridade</h5>
            <form className="mx-2">
                <div className="form-check row">
                    <input className="form-check-input" type="radio" name="prioridade" id=" Todos" value="todos" checked></input>
                    <label className="form-check-label" htmlFor="Todos">
                        Todos
                </label>
                </div>
                <div className="form-check row">
                    <input className="form-check-input" type="radio" name="prioridade" id="priorAlta" value="alta"></input>
                    <label className="form-check-label" htmlFor="priorAlta">
                        Alta
                </label>
                </div>
                <div className="form-check row">
                    <input className="form-check-input" type="radio" name="prioridade" id="priorBaixa" value="baixa"></input>
                    <label className="form-check-label" htmlFor="priorBaixa">
                        Baixa
                </label>
                </div>
            </form>
        </>
    )
}