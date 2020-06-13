import React from 'react'
import './styles.css'

export default function editModal() {
    return (
        <>
            <button type="button" className="btn card-link buttonEdit" data-toggle="modal" data-target="#editModal">
                Editar
            </button>
            <div className="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editar</h5>
                            <button type="button " className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Nome</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Nome da atividade"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Descrição</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <fieldset className="form-group">
                                    <div className="row justify-content-start">
                                        <legend className="col-form-label col-sm-3 pt-0">Prioridade</legend>
                                        <div className="col-sm-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                    Alta
                                                 </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                                                <label className="form-check-label" htmlFor="gridRadios2">
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