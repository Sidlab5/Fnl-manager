import React, {useEffect, useState} from 'react';
import {  Redirect } from "react-router-dom";
import './Activate.css';
import Btn from '../../UI/button/btn';
import { connect } from 'react-redux';
import  { HandelActivateLicense} from "../../../actions/LicenseManager"



const Activate = (props) => {
    const [activeLicense,setActiveLicense]=useState(1);
    const [activated,setActivate]=useState(false);

    useEffect(()=>{
            if(props.licensesList.length===1){
                handleActivation()
            }
    },[])
  
   
    const handleActivation=()=>{

        props.dispatch(HandelActivateLicense(activeLicense))
        setActivate(true)
       
    }


    if(activated){
        return <Redirect to='/Main' />
    }


    return (
      
            <div className="activate">
                
                 <h1 className="activate-header">Select one of the following Licenses to activate</h1>

                    <div className="Licenses-list">
                    <ul className="pd0">

                            {props.licensesList.map((license,i)=>(
                                     
                                        <li className={activeLicense==i+1? "licenice-ItemActive licenice-Item" : "licenice-Item" }>
                                        <button  className="licenice-Btn" onClick={() => setActiveLicense(i+1)} >
                                       <p className="mr0"><span className="bold">  licenses number :</span>  {license.id} </p>
                                       <p><span className="bold" >Modules:</span> 
                                      { license.moduleModels!==null && 
                                        <ul className="pd0">
                                        {
                                        license.moduleModels.map((module)=>  <li className="list"> {module.name}  </li>)}
                                            
                                        </ul>
                                          }
                                        </p>
                                     
                                       </button>
                                         </li>
                             ) )}
                            
                            
                         </ul>
                          
                    </div>
                
                    <Btn text="ACTIVATE" type="primary" isFullWidth={true} handleClick={handleActivation}  size="large" />
                    <a className="logout" href="">
                        Logout
                    </a>   
                        
                
            </div>
            
        
       
    )
}

function mapStateToProps({LicenseManager}) {
    
    return {
        licensesList : LicenseManager.licenseData.customer.licenses
    }
}

export default connect(mapStateToProps)(Activate);
