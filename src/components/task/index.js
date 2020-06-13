import React from 'react'
import './styles.css'
import DeleteModal from '../deleteModal'
import EditModal from '../editModal'
function Task({ task,setTaskAll }) {
    return (
        <div className="card taskCard" style={{ borderRadius: "5px" }}>
            <div className="card-body">
                <h5 className="card-title">{task.nome}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{task.prioridade}</h6>
                <p className="card-text">{task.descricao}</p>
                <div className=" d-flex justify-content-around">
                    <EditModal task={task} setTaskAll={setTaskAll}/>
                    <DeleteModal task={task} setTaskAll={setTaskAll}/>
                </div>
            </div>
        </div>
    )
}
export default Task