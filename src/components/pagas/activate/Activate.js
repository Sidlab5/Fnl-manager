import React, {useState} from 'react';
import {  Button } from 'antd';
import {  Redirect } from "react-router-dom";
import './Activate.css';


const Activate = () => {
    const [activeLicense,setActiveLicense]=useState(1);
    const [activated,setActivate]=useState(false);

    const handleActivation=()=>{
        setActivate(true);
    }


    if(activated){
        return <Redirect to='/Main' />
    }


    return (
      
            <div className="activate">
                 <h1 className="activate-header">Select one of the following Licenses to activate</h1>

                    <div className="Licenses-list">
                    <ul className="pd0">
            
                            <li className={activeLicense==1? "licenice-ItemActive licenice-Item" : "licenice-Item" }
                           >
                                <button  className="licenice-Btn" onClick={() => setActiveLicense(1)} >
                                licenses number : 2356 /
                                modules : safy, gfshg, dLn
                                </button>
                            </li>
                            <li className={activeLicense==2? "licenice-ItemActive licenice-Item" : "licenice-Item" }
                           >
                                <button  className="licenice-Btn" onClick={() => setActiveLicense(2)} >
                                licenses number : 2356 /
                                modules : safy, gfshg, dLn
                                </button>
                            </li>
                            <li
                            className={activeLicense==3? "licenice-ItemActive licenice-Item" : " licenice-Item"}>
                            <button  
                            className="licenice-Btn"
                            onClick={() => setActiveLicense(3)}>
                           licenses number : 2356 /
                           modules : safy, gfshg, dLn
                            </button>
                            </li>

                         </ul>
                    </div>
                
                    <Button type="primary" className="Activate-btn" onClick={handleActivation} >
                        ACTIVATE
                    </Button>     
                
            </div>
            
        
       
    )
}



export default Activate
