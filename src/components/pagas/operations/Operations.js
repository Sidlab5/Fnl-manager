import React, {useState} from 'react';
import SideNav from '../../UI/sidebar/SideNav';
import {  Redirect } from "react-router-dom";
import Btn from '../../UI/button/btn';
import { Card} from 'antd';
import { connect } from 'react-redux';
import  { HandelActivateLicense, HandelSetUser} from "../../../actions/LicenseManager"
import greenOn from "../../../../assets/green-on.png" 
import greenOff from "../../../../assets/green-off.png" 
import redOn from "../../../../assets/red-on.png" 
import redOff from "../../../../assets/red-off.jpg" 



import "./operations.css"




const Operations = (props) => {
    const[deactivate,setDeactivate]=useState(false);
    const[updateLicences,setUpdateLicences]=useState(false);

    const handleDeactivate=()=>{
        props.dispatch(HandelActivateLicense(null))
        props.dispatch(HandelSetUser(null,null))
        setDeactivate(true);
    }
    const handleUpdateLicenes=()=>{
        setUpdateLicences(true);
    }


    
   
    return (
        
          

         
            <div className="operationactivated">
                <h1 className="header">License server status</h1>

             
                <div className="operationsbtns">
                    <Btn type="primary" handleClick={handleDeactivate} text="START SERVER" size="large" />
                    <Btn type="primary" handleClick={handleUpdateLicenes} text="STOP SERVER"   size="large" />   
                    <img src={greenOn} className="img" />
                </div>
                
               
               
                
                <div className="operationsbtns">
                    <Btn type="primary" handleClick={handleDeactivate} text="RESTART SERVER"  size="large" />
                    <Btn type="primary" handleClick={handleUpdateLicenes} text="REFRESH"   size="large" />  
                <img src={redOn} className="img" />
                
                </div>

                <div className="operationsscreen">
               <Card className="card" >
                    <p>here print the status and the quries of  the the  the serivces  </p>
                </Card> 
                </div>

                <div className="operationsbtnss">
                    <Btn type="primary" handleClick={handleDeactivate} text="INSTALL AS SERVICE"/>
                    <Btn type="primary" handleClick={handleUpdateLicenes} text="UNINSTALL AS SERVICE" />    
                </div>
            </div>
            
       
       
    )
}
function mapStateToProps({LicenseManager}) {
    
    return {
        user:LicenseManager.userData,
        ActivatedLicenses:LicenseManager.userData?(LicenseManager.userData.licenses.
            filter((License)=>License.id===LicenseManager.activeLicenseid))[0]:null
    }
}


export default connect(mapStateToProps)( Operations);