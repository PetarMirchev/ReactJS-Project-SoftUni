import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';
import AuthContext from  '../context/AuthContext';
import { useContext } from 'react';

export default function AuthGuard(props){

    const { isAuthenticated } = useContext(AuthContext)

    if(!isAuthenticated){
        return <Navigate to='/login' />
    }

  return <Outlet/>
}
