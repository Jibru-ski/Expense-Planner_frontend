import api from "./api"

export async function registerService(userData) {
    try {
        const res = await api.post("/auth/register", userData)
        return res.data   
    } catch (error) {
        console.error("Registration error:", error.response?.data || error.message)
        throw error
    }
  
}

export async function loginService(userData) {
    try {
        const res = await api.post("/auth/login", userData)
        return res.data   
    } catch (error) {
        console.error("Login error:", error.response?.data || error.message)
        throw error
    }
  
}