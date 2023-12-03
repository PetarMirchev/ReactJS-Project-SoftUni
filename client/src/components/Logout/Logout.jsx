import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect( () => {
        authService.logout()
            .then(() => {
                logoutHandler();
                navigate('/');
            }).catch(() => { 
                logoutHandler(); //! on error auto logout user & clear cookies!
                navigate('/');
            })
    }, []);

  return  null;
}

export default Logout