import React, { useContext, useEffect} from 'react';
import {  useNavigate } from 'react-router-dom';
import { UserContext } from '../Components/Context';

const Login = () => {
    let data = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(data.auth)
    })
    // console.log(data)
    return (
        <div>
            <p onClick={()=>{data.setauth(!data.auth)}}>This is login {data.auth.toString()}</p>
            <button onClick={()=>navigate("/home")}>Clcik</button>
        </div>
    );
};

export default Login;