import axios from "axios"

const ApiRequest = axios.create({
    baseURL: 'http://localhost:3000'
})

export default ApiRequest