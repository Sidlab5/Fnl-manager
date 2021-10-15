import {Base} from "../API/Base"
export const SET_USER = 'SET_USER';
export const SET_ACTIVE_LICENSE = 'SET_ACTIVE_LICENSE';


export const setUser = (user) => {
  return {
      type: SET_USER,
      user
  }
}


export const HandelSetUser=(username,password)=>{
  return  (dispatch)=>{
      
      return  Base.post('/sidlab/customers/login', { username, password })
         .then(res =>  dispatch(setUser(res.data.data)))
         .catch(err => console.log("err:"+err))
        
  }

}
export const setActiveLicenses = (id) => {
  return {
      type: SET_ACTIVE_LICENSE,
      id
  }
}

export const HandelActivateLicense=(id)=>{
  return(dispatch)=>{
    
      
      return  Base.post(`sidlab/customers/activateLicense/${id}`)
      .then(res=>{dispatch(setActiveLicenses(id))})
        
  }
}