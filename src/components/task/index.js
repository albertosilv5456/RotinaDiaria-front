import React from 'react'
import './styles.css'
import DeleteModal from '../deleteModal'
import EditModal from '../editModal'
export default function Task() {
    return (
        <div className="card taskCard" style={{ borderRadius: "5px" }}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className=" d-flex justify-content-around">
                    <EditModal />
                    <DeleteModal />
                </div>
            </div>
        </div>
    )
}
