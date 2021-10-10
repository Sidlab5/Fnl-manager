import React, {useEffect, useState} from 'react';
import {  Redirect } from "react-router-dom";
import './Activate.css';
import Btn from '../../UI/button/btn';
import { connect } from 'react-redux';
import  { HandelActivateLicense, HandelSetUser} from "../../../actions/LicenseManager"



const Activate = (props) => {
    const [activeLicense,setActiveLicense]=useState(props.licensesList? props.licensesList[0].id:0);
    const [activated,setActivate]=useState(false);
    const[logedOut,setLogedOut]=useState(false);

    useEffect(()=>{
            if(props.licensesList.length===1){
                handleActivation()
            }
    },[])
  
   
    const handleActivation=()=>{

        props.dispatch(HandelActivateLicense(activeLicense))
        setActivate(true)
       
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
                
                 <p className="activate-header">Select one of the following Licenses to activate</p>

                    <div className="Licenses-list">
                    <ul className="pd0">



                            {props.licensesList.map((license)=>(
                                     
                                        <li className={activeLicense==license.id? "licenice-ItemActive licenice-Item" : "licenice-Item" }>
                                        <button  className="licenice-Btn" onClick={() => setActiveLicense(license.id)} >
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
                <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                    <Btn text="ACTIVATE" type="primary" handleClick={handleActivation} />
                    <Btn text="LOGOUT" type="secondary" handleClick={handleLogOut} disabled={true}/>
                </div>
                    {/* <a className="logout" href="">
                        Logout
                    </a>    */}
                        
                
            </div>
            
        
       
    )
}

function mapStateToProps({LicenseManager}) {
    return {
        licensesList : LicenseManager.userData? LicenseManager.userData.licenses:null
    }
}

export default connect(mapStateToProps)(Activate);
