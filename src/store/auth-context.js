import React from "react";


const AuthContext = React.createContext({
    isLoggedIn: false,
    login:()=>{},
    logout:()=>{}
})


export const AuthContextProvider = (props)=>{

    const loginHandler =()=>{

    }

    const logoutHandler = ()=>{
        
    }


    const contextValue = {
        isLoggedIn:false,
        login:loginHandler,
        logout:logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}


export default AuthContext;

