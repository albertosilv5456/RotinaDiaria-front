import React from 'react'
import './styles.css'
import api from '../../services'
export default function Filter({ setTaskAll }) {
    async function taskPrioridade() {
        const prioridade = document.querySelector('input[name="prioridade"]:checked').value;
        const loginUser = JSON.parse(localStorage.getItem('userTask'))
        const token = loginUser.token
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        await api.get(`/${loginUser.user._id}/tarefas`, config).then((res) => {
            if (prioridade === 'todos') {
                setTaskAll(res.data)
            }
            else {
                setTaskAll(res.data.filter(e => {
                    return e.prioridade.toLowerCase() === prioridade
                }))
            }

        })

    }
    return (
        <div className="filter">
            <div className="mx-2 row ">
                <div className="form-check col-12 col-md-4">
                    <input className="form-check-input" type="radio" name="prioridade" id="Todos" value="todos" onClick={taskPrioridade} ></input>
                    <label className="form-check-label" htmlFor="Todos">
                        Todos
                </label>
                </div>
                <div className="form-check col-12 col-md-4">
                    <input className="form-check-input" type="radio" name="prioridade" id="priorAlta" onClick={taskPrioridade} value="Alta"></input>
                    <label className="form-check-label" htmlFor="priorAlta">Prioridade Alta</label>
                </div>
                <div className="form-check col-12 col-md-4 ">
                    <input className="form-check-input" type="radio" name="prioridade" id="priorBaixa" onClick={taskPrioridade} value="Baixa"></input>
                    <label className="form-check-label" htmlFor="priorBaixa">Prioridade Baixa
                </label>
                </div>
            </div>

        </div>
    )
}