import React, {useState} from 'react';
import './SideNav.css';



const SideNav = (props) => {



    return (
        <ul className="sideNav">
            
            <li 
              className={props.active==1? "sideNavItemActive sideNavItem" : " sideNavItem" }>
                <button onClick={() => props.handleTabClick(1)} className="disabled sideNavBtn" disabled={true} >
                  
                  Operations
                </button>
            </li>
           
            <li
              className= {props.active==2? "sideNavItemActive sideNavItem" : " sideNavItem" }>
              <button  onClick={() => props.handleTabClick(2)}
              className="disabled sideNavBtn" disabled={true}
              >
               Status
              </button>
            </li> 

            <li 
              className={props.active==3? "sideNavItemActive sideNavItem" : " sideNavItem" }>
                <button onClick={() => props.handleTabClick(3)} className="sideNavBtn"  >
                  License
                </button>
            </li>
           
        </ul>
    )
}



export default SideNav
