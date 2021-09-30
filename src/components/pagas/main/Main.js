import React, {useState} from 'react';
import SideNav from '../../UI/sidebar/SideNav';
import {  Button } from 'antd';
import {  Redirect } from "react-router-dom";



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
                <Button type="primary" className="btn" onClick={handleDeactivate} >
                        DEACTIVATE
                    </Button>

                    <Button type="primary"  className="btn" onClick={handleUpdateLicenes} >
                       UPDATE LICENSE
                    </Button>
                </div>
            </div>
            
        </div>
       
    )
}



export default Main
