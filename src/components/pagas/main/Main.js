import React, {useState} from 'react';
import SideNav from '../../UI/sidebar/SideNav';
import Operations from '../operations/Operations';
import LicenseInfo from '../licenseInfo/LicenseInfo';
import Status from '../status/Status';
import './Main.css';


const Main = () => {
    const [active, setActive] = useState(3);
    const [view, setView] = useState(3);


    const handleTabClick = (num) => {
            setView(num)
            setActive(num)
               
    }


    let content = null;
    if (view === 1) {
        content = <Operations/>
    } else if (view === 2) {
        content = 	<Status/>
    } 
    else if (view === 3) {
        content = 	<LicenseInfo/>
    } 
   
    return (
        <div className="container">
            <div>
            <SideNav handleTabClick={handleTabClick} active={active}/>
            </div>
            
                 <div className="content">
                     {content}
                 </div>
                    
        </div>
       
    )
}



export default Main;
