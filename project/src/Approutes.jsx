import React from 'react'
import {Route, Routes} from "react-router-dom"
import approutes from './config/routes'
import { authroute } from './config/authroute'


const Approutes = () => {
  return (
   <Routes>{approutes.map((route)=>{
    if(route.Guard){
      return(
        <Route key={route.path} path={route.path} element={<route.Guard><route.Component/></route.Guard>}/>
      )
    }
    return (
      <Route key={route.path} path={route.path} element={<route.Component/>}/>
    )
   })}
   {authroute.map((authroute)=>(
    <Route key={authroute.path} path={authroute.path} element={<authroute.Component/>}/>
   ))}
   </Routes>
  )
}

export default Approutes