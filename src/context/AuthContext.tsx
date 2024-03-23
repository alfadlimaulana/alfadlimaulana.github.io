import { ReactNode, createContext, useEffect, useReducer } from "react";

interface Props {
    children: ReactNode
}

export interface User {
    username: string
    token?: string
}

interface AuthState {
    user?: User | null
}

type Login = {type: "LOGIN", payload: User}
type Logout = {type: "LOGOUT"}
type AuthAction = Login | Logout

const initialState: AuthState = {
    user: null
};

export const AuthContext = createContext<{ state: AuthState, dispatch: React.Dispatch<AuthAction> }>({state: initialState, dispatch: () => null})

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "LOGIN":
            return {user: action.payload}
        case "LOGOUT":
            return {user: null}
        default:
            return state
    }
}

export const AuthContextProvider = ({children}: Props) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
      const userString = localStorage.getItem('user')

      if (userString) {
        dispatch({type: "LOGIN", payload: JSON.parse(userString)})
      }
    }, [])
    

    return (
        <AuthContext.Provider value={{state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}