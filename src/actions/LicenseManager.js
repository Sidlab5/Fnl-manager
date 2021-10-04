import Base from "../API/Base"
export const SET_USER = 'SET_USER';
export const SET_ACTIVE_LICENSE = 'SET_ACTIVE_LICENSE';


export const setUser = (user) => {
  return {
      type: SET_USER,
      user
  }
}


export const HandelSetUser=(username,password)=>{
  return(dispatch)=>{
   
      
      return  Base.post('sidlab/customers/login',{username, password})
      .then((user)=>dispatch(setUser(user)))
        
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
    return dispatch(setActiveLicenses(id))
      
     /* return  Base.post('sidlab/customers/login',{username, password})
      .then((user)=>dispatch(setUser(user)))*/
        
  }
}