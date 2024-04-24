import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../layouts/useAuth'
import Error from '../layouts/error';

const Admin = () => {
  const token = useAuth()
  {
    if (token === 'admin') return <Outlet />
    else if (token === 'student') return <Error />
    else return <Navigate to='/login' />
  }
  // return isTrue()==='admin' ? <Outlet /> : <Navigate to='/login' /> 
}
export default Admin