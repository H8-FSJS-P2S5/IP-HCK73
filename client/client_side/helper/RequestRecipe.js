import axios from "axios"

const RequestRecipe = axios.create({
    // baseURL : "184.73.49.203"
    baseURL : "http://localhost:3000"
})

export default RequestRecipe