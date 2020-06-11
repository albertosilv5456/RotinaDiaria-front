import React from 'react'

export default function filter() {
    return (
        <>
            <h4 className="mt-3"> Filtrar</h4>
            <hr />
            <h5>Prioridade</h5>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="prioridade" id="priorAlta" value="option1"></input>
                <label className="form-check-label" htmlFor="priorAlta">
                    Alta
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="prioridade" id="priorBaixa" value="option2"></input>
                <label className="form-check-label" htmlFor="priorBaixa">
                    Baixa
                </label>
            </div>
        </>
    )
}