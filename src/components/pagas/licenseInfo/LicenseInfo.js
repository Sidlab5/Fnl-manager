import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Btn from '../../UI/button/btn';
import { Card,Modal} from 'antd';
import { connect } from 'react-redux';
import  { HandelDeactivateLicense, HandelLogOut} from "../../../actions/LicenseManager"


import './LicenseInfo.css'

const LicenseInfo = (props) => {
    
    let history = useHistory();

    useEffect(()=>{

        if(props.user===null&&props.ActivatedLicenses===null)
            history.push({pathname:"/", state: {old:false }} );   

    },[props.user,props.ActivatedLicenses])


    const handleDeactivate=()=>{
        props.dispatch(HandelDeactivateLicense(props.ActivatedLicenses.id))
        
    }
    const handleUpdateLicenes=()=>{
    }

    const confirmModal = () => {
        Modal.confirm({
          content: 'Logout will deactivate the current activated license',
          okText: 'Deactivate and logout',
          cancelText: 'Cancel',
          className:"model",
          onOk() {
            handleDeactivate()
          },
        });
      }


    

    
   
    return (
        <div className="container">
           
            <div className="activated">
                <h1 className="header">SIDLAB License is activated</h1>

                <div className="screen">
                    {props.ActivatedLicenses && props.user?
                    <Card  title={<h3 className="span mr0">License information </h3>}>
                            <p><span className="span">Account:</span> {props.user.firstName+" "
                            + props.user.lastName}</p>
                            <p><span className="span">Email:</span> {props.user.email}</p>
                            <p><span className="span">License type:</span> {props.ActivatedLicenses.licenseTypeModel.name}</p>
                            <p><span className="span">Modules:</span> 
                                { props.ActivatedLicenses.moduleModels && 
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

                        
                    </Card> :null}
                </div>

                <div className="btns">
                    <Btn type="primary" handleClick={confirmModal} text="Deactivate" />
                    <Btn type="primary" handleClick={handleUpdateLicenes} text="Update License" disabled={true} />    
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
