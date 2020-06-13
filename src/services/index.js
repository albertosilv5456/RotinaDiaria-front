import axios from 'axios'

const api  = axios.create({
    baseURL:'https://tarefas5456.herokuapp.com/'
})
export default api;