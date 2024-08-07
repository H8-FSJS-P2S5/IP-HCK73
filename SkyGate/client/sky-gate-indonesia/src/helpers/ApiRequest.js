import axios from "axios"

const ApiRequest = axios.create({
    baseUrl: 'http://localhost:3000'
})

export default ApiRequest