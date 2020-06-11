import React from 'react'
import './styles.css'

export default function deleteModal() {
    return (
        <>
            <button type="button" className="btn card-link buttonEdit" data-toggle="modal" data-target="#deleteModal">
                Excluir
            </button>
            <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Sim</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}