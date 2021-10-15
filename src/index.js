import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './App.css'
import {createStore } from "redux"
import reduser from "./reducers"
import middelware from "./middelware"
import { Provider } from 'react-redux'






let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)


 
const store = createStore(reduser,middelware)


render(
    
<Provider store ={store}>

    <App />
  

</Provider>


,document.getElementById('root'))
