import axios from "axios";

const axi = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
    headers: {'Content-Type': 'application/json'}
})

export default axi
