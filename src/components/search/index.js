import React, { useState } from 'react'
import './styles.css'
import api from '../../services'
export default function Search({ taskAll, setTaskAll }) {
    const [search, setSearch] = useState('')
    async function handleKeyDown() {
        const loginUser = JSON.parse(localStorage.getItem('userTask'))
            const config = {
                headers: { Authorization: `Bearer ${loginUser.token}` }
            };
        if (search === '') {
            
            await api.get(`/${loginUser.user._id}/tarefas`, config).then((res) => {
                setTaskAll(res.data)
            })
        }
        else{
            await api.get(`/${loginUser.user._id}/tarefas`, config).then((res) => {
                setTaskAll(res.data.filter(e => {
                    return e.nome.indexOf(search) >-1
            }))
        })
    }
}
    return (

        <input className="form-control  search"
            id="search" placeholder="Search"

            aria-label="Search"
            onChange={event => { setSearch(event.target.value) }}
            onKeyPress={event => {
                if (event.key === 'Enter') {
                    handleKeyDown()
                }
            }}
        >
        </input>

    )
}