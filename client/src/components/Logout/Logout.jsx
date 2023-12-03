import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import AuthContext from '../../context/AuthContext';

const Logout = () => {

    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect( () => {
        authService.logout()
            .then(() => {
                logoutHandler();
                navigate('/');
            }).catch((err) => { 
                logoutHandler(); //! on error auto logout user & clear cookies!
                navigate('/');
                console.log(err);
            })
    }, []);

  return  null;
}

export default Logout