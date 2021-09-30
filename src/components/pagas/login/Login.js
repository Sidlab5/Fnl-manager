import React, { useState } from 'react';
import Inpt from '../../UI/input/Inputs';
import {  Redirect } from "react-router-dom";
import Btn from '../../UI/button/btn';
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

          <div className="login-form">

                    <div className="input-container"  >
                    <p className="mr0"> Email</p>
                    <Inpt handleChange={handleChangeEmail} 
                     value={email}
                     placeholder="Enter your Email address"
                      size="large" />
                    </div>
                     
                    
                   <div className="input-container">
                    <p className="mr0"> Password</p>
                    <Inpt handleChange={handleChangepassword} 
                      value={password} 
                      placeholder="Enter your Password"
                      size="large" 
                      type="password"/>
                   
                   </div>
                       
                   
                   
                    <div  className="input-container">
                    <Btn text="Log in" type="primary" handleClick={handleLogin}
                     disabled={email===""||password===""} isFullWidth={true}/>
                        
                    </div>

                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    
               </div>
      </div>

  );
};

export default Login;