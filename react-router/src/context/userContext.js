import {createContext, useReducer, useContext} from "react"

const UserContext = createContext()
const UserDispatchContext = createContext()

export function UserProvider({children}) {
    const [user, dispatch] = useReducer(
        userReducer,
        initialUser
    )
    
    return (
        <UserContext.Provider value = {user}>
            <UserDispatchContext.Provider value = {dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext)
}

export function useUsersDispatch() {
    return useContext(UserDispatchContext)
}

function userReducer(user,action){
    
    console.log(user,action)
    switch(action.type) {
        case "logout":{
            user = {name: null}
            return user
        }
        case "login":{
            console.log("login")
            return initialUser
        }
        default: {
            throw Error("Unknown action")
        }
    }
}

const initialUser = {name:"Nino"}