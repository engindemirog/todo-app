import axios from "axios"

export default class TodoService{
    url = "https://jsonplaceholder.typicode.com/todos"

    getTodos(){
        return axios.get(this.url)
    }
}