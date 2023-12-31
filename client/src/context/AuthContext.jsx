import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from '../hooks/usePersistedState';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [ auth, setAuth ] = usePersistedState('auth', {}); //(key, defaultValue)



    const loginSubmitHandler = async ( values ) => {
        try {
            //first step - login user in the server and get session ID from server  
            const result = await authService.login(values.email, values.password);
            
            // second step - set information in custom hook to be saved & check if is still in youse
            delete result.password;
            setAuth(result);
    
            // third step - save token in 'localStorage --> 'accessToken''
            localStorage.setItem('accessToken', result.accessToken);
    
            navigate('/'); // or (Path.Home) whiteout magic strings!

        } catch (error) {
            console.log(error, 'error on login - user not found');
            setAuth({});
            localStorage.removeItem('accessToken');
            navigate('/login');
        }
    };



    
    const registerSubmitHandler = async ( values ) => {

        try {
            //! password to be Encrypted??
            const result = await authService.register(  values.username, values.email, values.country, values.img, values.city, values.phone, values.password);
            delete result.password;

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate('/'); //Path.Home           
        } catch (error) {
            setAuth({});
            localStorage.removeItem('accessToken');
            navigate('*');
        }
    };
    

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        localStorage.removeItem('auth');
    };


    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username:  auth.username || auth.email,
        email: auth.email,
        country: auth.country || auth.null,
        img: auth.img || auth.null,
        city: auth.city || auth.null,
        phone: auth.phone || auth.null,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
    }

  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;