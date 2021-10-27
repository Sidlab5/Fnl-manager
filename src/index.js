import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import './App.css'
import {createStore } from "redux"
import reducer from "./reducers"
import middelware from "./middelware"
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'






let root = document.createElement('div')

root.id = 'root'
document.body.appendChild(root)


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, reducer)
  let store = createStore(persistedReducer,middelware)


  let persistor = persistStore(store)


 


render(
    
<Provider store ={store}>
<PersistGate loading={null} persistor={persistor}>

    <App />
    </PersistGate>


</Provider>


,document.getElementById('root'))
