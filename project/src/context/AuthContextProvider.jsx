import React,{createContext,useContext,useReducer} from 'react'


const AppContex=createContext();

const AuthContextProvider = ({children}) => {
    const[state,dispatch]=useReducer(Appreducer,initialState);
  return (
   <AppContex.Provider value={{state,dispatch}}>{children}</AppContex.Provider>
  )
}

export default AuthContextProvider;


export const UseAppContext=()=>{
    const context=useContext(AppContex);
    if(!context){
        throw new Error("app context error")
    }
    return context;
}