import React, {useState} from 'react';
import './SideNav.css';



const SideNav = () => {

 const [active,setActive]=useState(2);


    return (
        <ul className="sideNav">
            
            <li 
              className={active==1? "sideNavItemActive sideNavItem  " : " sideNavItem " }>
                <button onClick={() => setActive(1)} className="sideNavBtn"  >
                  STATUS
                </button>
            </li>
           
            <li
              className= {active==2? "sideNavItemActive sideNavItem " : " sideNavItem " }>
              <button  onClick={() => setActive(2)}
              className="sideNavBtn"
              >
               FNL
              </button>
            </li>

           
           
        </ul>
    )
}



export default SideNav
