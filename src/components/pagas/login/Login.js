import React, { useState ,useEffect} from 'react';
import Inpt from '../../UI/input/Inputs';
import {  Redirect } from "react-router-dom";
import Btn from '../../UI/button/btn';
import './Login.css'
import { HandelSetUser } from '../../../actions/LicenseManager';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
const Login = (props) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [login,setLogin]=useState(false);
    const [wrongedata,setWrongedata]=useState(false)
    const dispatch = useDispatch();

    useEffect( () => {

      if(props.user && props.user!==null)
        setLogin(true); 
     

      if(props.user===null){
        setWrongedata(true);

      }
      if(email!=="" && password!==""){
        setWrongedata(false);

      }
      
  }, [props.user,email,password])


    const handleChangepassword=(e)=>{
        setPassword(e.target.value);
        }

    const handleChangeEmail=(e)=>{
            setEmail(e.target.value);
            }


    const handleLogin =   () => {
      
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

                    <div className="input-container"  >
                   
                    <Inpt handleChange={handleChangeEmail} 
                     value={email}
                     placeholder="Enter your Email address"
                      />
                    </div>
                     
                    
                   <div className="input-container">
                    
                    <Inpt handleChange={handleChangepassword} 
                      value={password} 
                      placeholder="Enter your Password"
                      type="password"/>
                   
                   </div>
                       
                   <p className={wrongedata?"wrong mr0":"hide"}>Incorrect Email or Password</p>
                   
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
      user: LicenseManager.userData
  }
}
export default connect(mapStateToProps)(Login);