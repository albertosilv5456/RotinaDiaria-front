import React, { useState } from 'react'
import './styles.css';
import api from '../../services'
function AddTask({ setTaskAll,user,token }) {

    const [nameTask, setNameTask] = useState('')
    const [descriptionTask, setDescriptionTask] = useState('')

    function handleDescriptionTask(e) {
        setDescriptionTask(e.target.value)
    }

    function handleNameTask(e) {
        setNameTask(e.target.value)
    }

    async function creationTask() {
        const prioridade = document.querySelector('input[name="addprioridade"]:checked').value;
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const taks = {
            nome:nameTask,
            descricao:descriptionTask,
            prioridade:prioridade
        }
        await api.post(`create/${user.id}`,taks,config).then((res)=>{
           document.getElementById('addName').value=''
           document.getElementById('addDescri').value=''
        }) 
        await api.get(`/${user.id}/tarefas`, config).then((res) => { 
            setTaskAll(res.data)
         })     
    }

    return (
        <div>
            <button type="button" className="btn card-link buttonAdd" data-toggle="modal" data-target="#addModal">
                Adicionar Tarefa
            </button>
            <div className="modal fade" id="addModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modal-title"> Adicionar Tarefa</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="addName">Nome</label>
                                    <input type="email" className="form-control" id="addName" placeholder="Nome da atividade" onChange={handleNameTask}></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="addDescri">Descrição</label>
                                    <textarea className="form-control" id="addDescri" rows="3" placeholder="Descrição da atividade" onChange={handleDescriptionTask}></textarea>
                                </div>
                                <fieldset className="form-group">
                                    <div className="row justify-content-start">
                                        <legend className="col-form-label col-sm-3 pt-0">Prioridade</legend>
                                        <div className="col-sm-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="addprioridade" id="addprioridade" value="Alta" defaultChecked ></input>
                                                <label className="form-check-label" htmlFor="addprioridade1">
                                                    Alta
                                                 </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="addprioridade" id="addprioridade2" value="Baixa"></input>
                                                <label className="form-check-label" htmlFor="addprioridade2">
                                                    Baixa
                                                    </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={creationTask}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddTask;