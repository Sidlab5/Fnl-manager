import React, {useState} from 'react';
import {  Button } from 'antd';
import {  Redirect } from "react-router-dom";
import './Activate.css';


const Activate = (props) => {
    const [active,setActive]=useState(1);
    const[licenseslist,setLicenseslist]=useState([]);

    const[i,setI]=useState(false);

    const handled=()=>{
        setI(true);
    }
    if(i){
        return <Redirect to='/M' />
    }


    return (
      
            <div className="activate">
                 <h1 className="activate-header">Select one of the following Licenses to activate</h1>

                    <div className="Licenses-list">
                    <ul style={{padding:"0px"}}>
            
                            <li className={active==1? "licenice-ItemActive licenice-Item " : " licenice-Item  " }
                           >
                                <button  className="licenice-Btn" onClick={() => setActive(1)} >
                                licenses number : 2356 /
                                modules : safy, gfshg, dLn
                                </button>
                            </li>
                            <li className={active==2? "licenice-ItemActive licenice-Item " : " licenice-Item  " }
                           >
                                <button  className="licenice-Btn" onClick={() => setActive(2)} >
                                licenses number : 2356 /
                                modules : safy, gfshg, dLn
                                </button>
                            </li>
                            <li
                            className={active==3? "licenice-ItemActive licenice-Item   " : " licenice-Item  "}>
                            <button  
                            className="licenice-Btn"
                            onClick={() => setActive(3)}>
                           licenses number : 2356 /
                           modules : safy, gfshg, dLn
                            </button>
                            </li>

                        
           
                         </ul>
                    </div>
                
                <Button type="primary" className="Activate-btn" onClick={handled} >
                        ACTIVATE
                    </Button>

                   
                
            </div>
            
        
       
    )
}



export default Activate
