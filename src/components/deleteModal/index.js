import React from 'react'
import './styles.css'
import api from '../../services'
export default function DeleteModal({task, setTaskAll}) {
    async function handleDelete(){
            const loginUser = JSON.parse(localStorage.getItem('user'))
            const token = loginUser.token
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            await api.delete(`delete/${task._id}`,config).then((res)=>{
                console.log('tudo certo')
            })
            await api.get(`/${loginUser.user._id}/tarefas`, config).then((res) => {
                setTaskAll(res.data)
        }) 
    }
    return (
        <>
            <button type="button" className="btn card-link buttonEdit" data-toggle="modal" data-target="#deleteModal">
                Excluir
            </button>
            <div className="modal fade" id="deleteModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Excluir</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Tem certeza que deseja excluir?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleDelete}>Sim</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}