import React, {useEffect, useState} from 'react';
import {  Redirect } from "react-router-dom";
import './Activate.css';
import Btn from '../../UI/button/btn';
import { connect } from 'react-redux';
import  { HandelActivateLicense, HandelSetUser} from "../../../actions/LicenseManager"



const Activate = (props) => {

        const [activeLicense,setActiveLicense]=useState(props.licensesList&&props.licensesList.length!==0? props.licensesList[0].id:null);
        const [activated,setActivate]=useState(false);
        const [logedOut,setLogedOut]=useState(false);



        useEffect(()=>{
                if(props.licensesList && props.licensesList.length===1)
                    handleActivation()

                if(props.activeLicenseid && props.activeLicenseid!==null)
                    setActivate(true)

        },[props.activeLicenseid])
    
    
        const handleActivation=()=>{

            props.dispatch(HandelActivateLicense(activeLicense))
        
        }

        const handleLogOut =()=>{
            props.dispatch(HandelActivateLicense(null))
            props.dispatch(HandelSetUser(null,null))
            setLogedOut(true)
        }


        if(activated){
            return <Redirect to='/Main' />
        }

        if(logedOut){
            return <Redirect to='/' />
        }

        return (
        
                <div className="activate">
                    {props.licensesList&&  props.licensesList.length!==0?<div>

                        <p className="activate-header">Select one of the following Licenses to activate</p>

                        <div className={props.licensesList&&props.licensesList.length>2?"Licenses-list overflow":"Licenses-list"}>


                        <ul className="pd0">


                                {props.licensesList ? 
                                        props.licensesList.map((license)=>(
                                                    
                                <li  key={license.id}className={activeLicense==license.id? "licenice-ItemActive licenice-Item" : "licenice-Item" }>
                                        <button  className="licenice-Btn" onClick={() => setActiveLicense(license.id)} >
                                        <p className="mr0"><span className="bold">  licenses number :</span>  {license.id} </p>
                                        <p><span className="bold" >Modules:</span> 
                                        { license.moduleModels!==null && 
                                            <ul className="pd0">
                                            {
                                            license.moduleModels.map((module)=>  <li  key={module.id} className="list"> {module.name}  </li>)}
                                                
                                            </ul>
                                            }
                                        </p>
                                        </button>
                                </li>

                                ) ):null}
                                
                            
                            </ul>
                            
                        </div>
                        <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                        <Btn text="ACTIVATE" type="primary" handleClick={handleActivation} disabled={activeLicense===null} />
                        <Btn text="LOGOUT" type="secondary" handleClick={handleLogOut} disabled={true}/>
                        </div>

                        </div>: <p className="activate-header">you have no Licenses to activate</p>

                        }
                    
                    
                            
                    
                </div>
                
            
        
        )
}

function mapStateToProps({LicenseManager}) {
    return {
        licensesList : LicenseManager.userData? LicenseManager.userData.licenses:null,
        activeLicenseid:LicenseManager.activeLicenseid
    }
}

export default connect(mapStateToProps)(Activate);
