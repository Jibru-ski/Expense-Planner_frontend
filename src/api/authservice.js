import api from "./api"

export async function registerService(username, email, password) {
    try {
        const res = await api.post("/auth/register", { username, email, password })
        return res.data   
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message)
        throw error
    }
  
}

export async function loginService(username, password) {
    try {
        const res = await api.post("/auth/login", { username, password })
        return res.data   
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message)
        throw error
    }
  
}