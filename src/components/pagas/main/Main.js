import React, {useState, useEffect} from 'react';
import SideNav from '../../UI/sidebar/SideNav';
import {  Button } from 'antd';
import {  Redirect } from "react-router-dom";



import './Main.css';


const Main = (props) => {
    const[i,setI]=useState("");

    const handled=()=>{
        setI("A");
    }
    const handleu=()=>{
        setI("L");
    }
    if(i==="A"){
        return <Redirect to='/A' />
    }
    if(i==="L"){
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
                <Button type="primary" className="btn" onClick={handled} >
                        DEACTIVATE
                    </Button>

                    <Button type="primary"  className="btn"  onClick={handleu}>
                       UPDATE LICENSE
                    </Button>
                </div>
            </div>
            
        </div>
       
    )
}



export default Main
