import React from 'react'
import Header from "./shared/header/Header"
import SideNav from './UI/sidebar/SideNav';
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

			<Route path='/' exact  component={Login}/>
			<Route path='/A'   component={Activate}/>
			<Route path='/M'   component={Main}/>

			<Footer/>

		</div>
		</Router>
		
	)
}

export default App;
