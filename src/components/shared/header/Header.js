import React from 'react';
import  './Header.css';
import logo from "../../../../assets/a.jpg" 


const Header = () => {
	return (
		<div className="mainContainer">
			<h1 className="title">SIDLAB FNL License Manager</h1>
            <img src={logo} className="img" />
		
		</div>
	)
}

export default Header;
