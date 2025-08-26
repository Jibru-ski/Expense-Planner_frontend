import api from "./api"

export async function register(name, email, password) {
    try {
        const res = await api.post("/auth/register", { name, email, password })
        return res.data   
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message)
        throw error
    }
  
}

export async function login(email, password) {
    try {
        const res = await api.post("/auth/login", { email, password })
        return res.data   
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message)
        throw error
    }
  
}