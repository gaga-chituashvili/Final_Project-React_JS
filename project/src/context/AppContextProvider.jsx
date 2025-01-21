import React,{createContext,useContext,useReducer} from 'react'
import { initialState, Reducer } from './reducer';


const contex=createContext();

const AppContextProvider = ({children}) => {
    const[state,dispatch]=useReducer(Reducer,initialState);
  return (
   <contex.Provider value={{state,dispatch}}>{children}</contex.Provider>
  )
}


export const UseAppContext=()=>{
    const Appcontext=useContext(contex);
    if(!Appcontext){
        throw new Error("app context error")
    }
    return Appcontext;
}


export default AppContextProvider;


