import React,{useEffect} from 'react'
import './styles.css'

export default function EditModal({task, setTaskAll}) {
    return (
        <>
            <button type="button" className="btn card-link buttonEdit" data-toggle="modal" data-target="#editModal">
                Editar
            </button>
            <div className="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="EditModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="EditModalLabel">Editar</h5>
                            <button type="button " className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="editNome">Nome</label>
                                    <input type="email" className="form-control" id="editNome" placeholder="Nome da atividade"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editDescript">Descrição</label>
                                    <textarea className="form-control" id="editDescript" rows="3"></textarea>
                                </div>
                                <fieldset className="form-group">
                                    <div className="row justify-content-start">
                                        <legend className="col-form-label col-sm-3 pt-0">Prioridade</legend>
                                        <div className="col-sm-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="editPrio" id="editPrio1" value="alta" checked></input>
                                                <label className="form-check-label" htmlFor="editPrio1">
                                                    Alta
                                                 </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="editPrio" id="editPrio2" value="baixa"></input>
                                                <label className="form-check-label" htmlFor="editPrio2">
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
                            <button type="button" className="btn btn-primary">Salvar alterações</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}