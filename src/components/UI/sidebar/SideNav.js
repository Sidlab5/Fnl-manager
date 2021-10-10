import React, {useState} from 'react';
import './SideNav.css';



const SideNav = () => {

 const [activeTap,setActiveTap]=useState(2);


    return (
        <ul className="sideNav">
            
            <li 
              className={activeTap==1? "sideNavItemActive sideNavItem" : " sideNavItem" }>
                <button onClick={() => setActiveTap(1)} className="sideNavBtn"  >
                  Status
                </button>
            </li>
           
            <li
              className= {activeTap==2? "sideNavItemActive sideNavItem" : " sideNavItem" }>
              <button  onClick={() => setActiveTap(2)}
              className="sideNavBtn"
              >
               FNL
              </button>
            </li> 
           
        </ul>
    )
}



export default SideNav
