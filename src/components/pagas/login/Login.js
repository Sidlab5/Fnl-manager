import React, { useState } from 'react';
import { Input, Button } from 'antd';
import {  Redirect } from "react-router-dom";


import './Login.css'

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [login,setLogin]=useState(false);


    const handleChangepassword=(e)=>{
        setPassword(e.target.value);
        }

    const handleChangeEmail=(e)=>{
            setEmail(e.target.value);
            }

    const handleLogin = () => {

      if(email===""||password===""){
          return;
      }
      else{
        setEmail("");
        setPassword("");
        setLogin(true); 
      }
   
    };


  if(login){
    return  <Redirect to='/Activate' />
    }

  return (
      <div className="login">
          <h1 className="login-header">Log in to activate FNL manager</h1>

          <div className="login-form"  >

                    <div style={{padding:" 20px 0 0 0"}} >
                    <p style={{margin:" 0px"}}> Email</p>
                    <Input onChange={handleChangeEmail} value={email} placeholder="Enter your Email address" />
                    </div>
                     
                    
                   <div style={{padding:" 20px 0 0 0"}}>
                    <p style={{margin:" 0px"}}> Password</p>
                    <Input
                        onChange={handleChangepassword}
                        value={password}
                        type="password"
                        placeholder="Enter your Password"
                        
                    />
                   </div>
                       
                   
                   
                    <div  style={{padding:" 25px 0 0 0"}}>
                    <Button type="primary" onClick={handleLogin} className="login-form-button" disabled={email===""||password===""} >
                        Log in
                    </Button>
                    </div>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    
               </div>
      </div>

  );
};

export default Login;