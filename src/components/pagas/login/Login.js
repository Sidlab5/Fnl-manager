import React, { useState ,useEffect} from 'react';
import Inpt from '../../UI/input/Inputs';
import {  Redirect } from "react-router-dom";
import Btn from '../../UI/button/btn';
import './Login.css'
import { HandelSetUser } from '../../../actions/LicenseManager';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Spin } from 'antd';


const Login = (props) => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [login,setLogin]=useState(false);
    const [wrongedata,setWrongedata]=useState(false)
    const dispatch = useDispatch();


    useEffect( () => {

      if(props.user && props.user!==null){
        setWrongedata(false);
        setLogin(true); 
     
      }
       

      if(props.user===null){
        setWrongedata(true);

      }
    
      
  }, [props.user,props.loading])



    const handleChangepassword=(e)=>{
        setPassword(e.target.value);
        setWrongedata(false);
        }


    const handleChangeEmail=(e)=>{
            setEmail(e.target.value);
            setWrongedata(false);
            }


    const handleLogin =() => {
      
      dispatch(HandelSetUser(email,password))
      setEmail("");
      setPassword("");
    };


   if(login){
       return  <Redirect to='/Activate' />
    }

    return (      

        <div className="login">
          
            <p className="login-header">Log In</p>

            <div className="login-form">
              <p className={wrongedata?"wrong mr0":"hide"}>Invalid email/password combination</p>

                    <div className="input-container"  >     
                      <Inpt handleChange={handleChangeEmail} 
                      value={email}
                      placeholder="Enter your Email address" />
                     </div>
                      
                    <div className="input-container">
                      <Inpt handleChange={handleChangepassword} 
                        value={password} 
                        placeholder="Enter your Password"
                        type="password"/>
                    </div>
                        
                    
                    <div  className="input-container">
                      <Btn text="Log in" type="primary" handleClick={handleLogin}
                      disabled={email===""||password===""} isFullWidth={true}  />      
                    </div>

                    <a className="login-form-forgot" href="">
                          Forgot your password
                    </a>
                      
            </div>
        </div>
        

    );
};

function mapStateToProps({LicenseManager}) {
  return {
      user: LicenseManager.userData,
      loading:LicenseManager.loading
  }
}
export default connect(mapStateToProps)(Login);