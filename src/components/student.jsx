import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../layouts/useAuth'
import Error from '../layouts/error';
const Student = () => {
  const token = useAuth()
  {
    if (token === 'student' || token === 'admin') return <Outlet />
    else return <Navigate to='/login' />
  }
  // return isTrue()==='admin' ? <Outlet /> : <Navigate to='/login' />
}

export default Student