import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import axios from "axios"

export const useLogin = () => {
    const { dispatch } = useAuthContext()
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false)
    
    const login = async (user: {username: string, password: string}) => {
        setLoading(true)

        try {
            const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/login`, user, {
                headers: {
                "Content-Type": "application/json"
                }
            })

            localStorage.setItem("user", JSON.stringify(res.data.data))
            dispatch({type: "LOGIN", payload: res.data.data})
            
            setLoading(false);
        } catch (error: any) {
            setError(error.response.data.errors)
            setLoading(false)
        }
    }

    return {login, error, loading}
}