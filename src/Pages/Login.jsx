import React, {  useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { UserContext } from '../Components/Context';

const Login = () => {

    const navigate = useNavigate()
    const data = useContext(UserContext)

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const handleSubmit = ()=>{
        if(email == "foo" && password=="bar"){
            data.setauth(true)
            navigate("/home")
        }else{
            alert("Email : foo Password: bar")
        }
    }

    useEffect(() => {
        document.body.style = 'background: skyblue;';
        document.title="Login"
    })
    return (
        <Form className='vertical-center'>
            <div style={{ border: "1px solid red",padding:"50px",background:"white",borderRadius:"50px" }}> 
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" onChange={(e)=>{setemail(e.target.value)}}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}}/>
                </Form.Group>
                <button type="button" onClick={handleSubmit} className="w-25 btn btn-outline-primary" style={{ margin: "0px auto 0px auto" }}>Login</button>
            </div>
        </Form>
    );
};

export default Login;