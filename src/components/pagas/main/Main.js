import React, {useState} from 'react';
import SideNav from '../../UI/sidebar/SideNav';
import {  Redirect } from "react-router-dom";
import Btn from '../../UI/button/btn';



import './Main.css';


const Main = () => {
    const[deactivate,setDeactivate]=useState(false);
    const[updateLicences,setUpdateLicences]=useState(false);

    const handleDeactivate=()=>{
        setDeactivate(true);
    }
    const handleUpdateLicenes=()=>{
        setUpdateLicences(true);
    }


    if(deactivate){
        return <Redirect to='/Activate' />
    }

    if(updateLicences){
        return <Redirect to='/' />
    }
   
    return (
        <div className="container">
            <SideNav/>
            <div className="activated">
                <h1 className="header">SIDLAB License is activated</h1>

                <div className="screen">
                    <p>same as SIDLAB</p>
                </div>

                <div className="btns">
                    <Btn type="primary"  handleClick={handleDeactivate} text="DEACTIVATE" />
        
                    <Btn type="primary"  handleClick={handleUpdateLicenes} text="UPDATE LICENSE" />
                       
                    
                </div>
            </div>
            
        </div>
       
    )
}



export default Main
