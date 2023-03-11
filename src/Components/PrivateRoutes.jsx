import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './Context';

const PrivateRoutes = ({children}) => {

    let {auth} = useContext(UserContext)

    if(!auth){
        return <Navigate to="/"/>
    }

    return children
};

export default PrivateRoutes;