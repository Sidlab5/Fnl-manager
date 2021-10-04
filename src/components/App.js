import React, { useState } from 'react'
import Header from "./shared/header/Header"
import Footer from "./shared/Footer/Footer";
import Login from './pagas/login/Login';
import Main from './pagas/main/Main';
import Activate from './pagas/activate/Activate';
import { HashRouter as Router, Route } from 'react-router-dom'


const App = () => {

	
	
	return (
		<Router>
		<div className='app'>
			<Header/>

			<Route path='/' exact>
				<Login/>
			</Route>

			<Route path='/Activate'>
				<Activate />
			</Route>
			
			<Route path='/Main' >
				<Main />
			</Route>

			<Footer/>

		</div>
		</Router>
		
	)
}

export default App;
