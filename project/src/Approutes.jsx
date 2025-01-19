import React from 'react'
import { Route, Routes } from 'react-router-dom'
import approutes from './config/routes'
import authRoutes from './config/authRoutes'

const Approutes = () => {
  return (
    <Routes>
      {approutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.Component />} />
      ))}
      {authRoutes.map((authRoute) => (
        <Route key={authRoute.path} path={authRoute.path} element={<authRoute.Component />} />
      ))}
    </Routes>
  )
}

export default Approutes