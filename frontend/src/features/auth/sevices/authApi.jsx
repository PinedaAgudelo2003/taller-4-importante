import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
const API_URL = `${BACKEND_URL}/api/auth`

export const registerUser =(data) =>
    axios.post(`${API_URL}/register`,data)

export const loginUser =(data) =>
    axios.post(`${API_URL}/login`,data)