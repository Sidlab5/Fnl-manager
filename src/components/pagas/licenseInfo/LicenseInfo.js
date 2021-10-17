import React, {useState} from 'react';
import {  Redirect } from "react-router-dom";
import Btn from '../../UI/button/btn';
import { Card} from 'antd';
import { connect } from 'react-redux';
import  { HandelActivateLicense, HandelSetUser} from "../../../actions/LicenseManager"

import './LicenseInfo.css'

const LicenseInfo = (props) => {
    
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


    if(deactivate){
        return <Redirect to='/' />
    }

    if(updateLicences){
        return <Redirect to='/' />
    }
   
    return (
        <div className="container">
           
            <div className="activated">
                <h1 className="header">SIDLAB License is activated</h1>

                <div className="screen">
                    <Card  title={<h3 className="span mr0">License information </h3>}>
                            <p><span className="span">Account:</span> {props.user.firstName+" "
                            + props.user.lastName}</p>
                            <p><span className="span">Email:</span> {props.user.email}</p>
                            <p><span className="span">License type:</span> {props.ActivatedLicenses.licenseTypeModel.name}</p>
                            <p><span className="span">Modules:</span> 
                                { props.ActivatedLicenses.moduleModels!==null && 
                                    <ul>
                                {  
                                        props.ActivatedLicenses.moduleModels.map((module)=>(
                                    
                                            <li key={module.id}> {module.name}</li>


                                            
                                            ))}
                                    
                                    </ul>
                                }
                            </p>
                            <p><span className="span" >License expiration date:</span> {props.ActivatedLicenses.renewDate}</p>
                            <p><span className="span">Maintenance subscription expiration date:</span> N/A</p>
                            <p><span className="span">Number of seats:</span> {props.ActivatedLicenses.seats}</p>

                        
                    </Card> 
                </div>

                <div className="btns">
                    <Btn type="primary" handleClick={handleDeactivate} text="Deactivate" disabled={true}/>
                    <Btn type="primary" handleClick={handleUpdateLicenes} text="Upload License" disabled={true} />    
                </div>
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


export default connect(mapStateToProps)(LicenseInfo);
