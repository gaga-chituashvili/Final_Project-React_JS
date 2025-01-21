import React from 'react'
import {Route, Routes} from "react-router-dom"
import approutes from './config/routes'


const Approutes = () => {
  return (
   <Routes>{approutes.map((routes)=>(
    <Route key={routes.path} path={routes.path} element={<routes.Component/>}/>
   ))}</Routes>
  )
}

export default Approutes