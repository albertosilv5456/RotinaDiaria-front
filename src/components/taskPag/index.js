import React, { useEffect, useState } from 'react'
import './styles.css'
import img from '../../img/logo2.png'
import api from '../../services'
import Filter from '../filter'
import Search from '../search'
import AddTaskModal from '../AddTask'
import { useHistory } from 'react-router-dom'
export default function TaskPag() {
    const [user, setUser] = useState({
        id: 0,
        name: '',
        email: ''
    })
    const [taskAll, setTaskAll] = useState([])
    const [token, setToken] = useState('')
    const history = useHistory()
    useEffect(() => {
        const loginUser = JSON.parse(localStorage.getItem('userTask'))
        setToken(loginUser.token)
        setUser({
            name: loginUser.user.nome,
            email: loginUser.user.email,
            id: loginUser.user._id
        })
        const config = {
            headers: { Authorization: `Bearer ${loginUser.token}` }
        };
        api.get(`/${loginUser.user._id}/tarefas`, config).then((res) => {
            setTaskAll(res.data)
        })
    }, [])
    async function handleDelete(task) {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        await api.delete(`delete/${task._id}`, config).then((res) => {
            console.log('tudo certo')
        })
        await api.get(`/${user.id}/tarefas`, config).then((res) => {
            setTaskAll(res.data)
        })
    }
    function handleEdit(task) {
        document.getElementById(`${task._id}task`).classList.remove('d-flex')
        document.getElementById(`${task._id}edit`).classList.remove('d-none')
        document.getElementById(`${task._id}task`).classList.add('d-none')
        document.getElementById(`${task._id}edit`).classList.add('d-flex')
        document.getElementById(`${task._id}name`).value = task.nome
        document.getElementById(`${task._id}descri`).value = task.descricao
        if (task.prioridade === 'alta') {
            document.getElementById(`${task._id}prio1`).setAttribute('checked', true)
        }
        else {
            document.getElementById(`${task._id}prio2`).setAttribute('checked', true)
        }
    }
    async function handleEditSave(task) {
        const prioridade = document.querySelector('input[name="editPrio"]:checked').value;
        const nome = document.getElementById(`${task._id}name`).value
        const descricao = document.getElementById(`${task._id}descri`).value
        const data = {
            nome,
            descricao,
            prioridade
        }
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        await api.put(`/editar/${task._id}`, data,config)
            .then(res => {
                document.getElementById(`${task._id}edit`).classList.remove('d-flex')
                document.getElementById(`${task._id}task`).classList.remove('d-none')
                document.getElementById(`${task._id}edit`).classList.add('d-none')
            })

        await api.get(`/${user.id}/tarefas`, config).then((res) => {
            setTaskAll(res.data)
        })
    }
    function handleCancele(task) {
        document.getElementById(`${task._id}edit`).classList.remove('d-flex')
        document.getElementById(`${task._id}task`).classList.remove('d-none')
        document.getElementById(`${task._id}edit`).classList.add('d-none')
    }
    function logout() {
        localStorage.removeItem('userTask')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        api.get('./logout',config).then(res=>{
            history.go('/')
        })
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-between" id="header">
                <div className="order-1 order-md-1">
                    <img src={img} className="img-fluid mt-3 mx-2 logo2" alt="Logo Task" />
                </div>
                <div className="order-3 order-md-2 m-3">
                    <Search taskAll={taskAll}setTaskAll={setTaskAll}/>
                </div>
                <div className="order-2 order-md-3 m-4 buttonLogout ">           
                            <button className="btn  buttonEdit mx-2 " onClick={()=>logout()}>Logout</button>
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col-12">
                    <div className="row my-4 justify-content-around">
                        <div className="">
                            <h4>Bem Vindo, {user.name}!</h4>
                        </div>
                        <div className="m-2">
                            <Filter setTaskAll={setTaskAll} />
                        </div>
                        <div className="">
                            <AddTaskModal setTaskAll={setTaskAll} user={user} token={token} />
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        {taskAll.map(task => (
                            <div key={task._id} className="col-12  col-md-6 col-lg-4 col-xl-3 my-1">
                                <div className="card taskCard" style={{ borderRadius: "5px" }}>
                                    <div className="card taskCard" style={{ borderRadius: "5px" }}>
                                        <div id={`${task._id}task`} className="card-body">
                                            <h5 className="card-title">{task.nome}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{task.prioridade}</h6>
                                            <p className="card-text">{task.descricao}</p>
                                            <div className=" d-flex justify-content-around">
                                                <div className="d-flex justify-content-around">
                                                    <button type="button" className="btn  buttonEdit mx-2" onClick={() => handleEdit(task)}>
                                                        Editar
                                                    </button>

                                                    <button type="button" className="btn buttonEdit mx-2" onClick={() => handleDelete(task)}>
                                                        Excluir
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div id={`${task._id}edit`} className="card-body d-none">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="editNome">Nome</label>
                                                    <input type="email" className="form-control" id={`${task._id}name`}  placeholder="Nome da atividade"></input>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="editDescript">Descrição</label>
                                                    <textarea className="form-control" id={`${task._id}descri`} rows="3"></textarea>
                                                </div>
                                                <fieldset className="form-group">
                                                    <div className="row justify-content-start">
                                                        <legend className="col-form-label col-sm-5 pt-0">Prioridade</legend>
                                                        <div className="col-sm-3">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="editPrio" id={`${task._id}prio1`} value="alta" ></input>
                                                                <label className="form-check-label" htmlFor="editPrio1">
                                                                    Alta
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="editPrio" id={`${task._id}prio2`} value="baixa"></input>
                                                                <label className="form-check-label" htmlFor="editPrio2">
                                                                    Baixa
                                                                </label>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </fieldset>
                                                <div>
                                                    <button type="button" className="btn btn-secondary mx-1" onClick={() => handleCancele(task)}>Cancelar</button>
                                                    <button type="button" className="btn btn-primary mx-1" onClick={() => handleEditSave(task)}>Salvar alterações</button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}