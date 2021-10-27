import {Base} from "../API/Base"
export const SET_USER = 'SET_USER';
export const SET_ACTIVE_LICENSE = 'SET_ACTIVE_LICENSE';
export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";
export const DEACTIVE_LICENSE="DEACTIVE_LICENSE"
export const LOGOUT="LOGOUT"




export const setUser = (user) => {
  return {
      type: SET_USER,
      user
  }
}
export const showLoader = () => (dispatch) => {
  dispatch({
    type: SHOW_LOADER,
  });
};

export const hideLoader = () => (dispatch) => {
  dispatch({
    type: HIDE_LOADER,
  });
};


export const HandelSetUser=(username,password)=>{
  return  (dispatch)=>{
      if(username===null&&password===null){
        return dispatch(setUser(null))
      }
      return  Base.post('/sidlab/customers/login', { username, password })
         .then(res => {console.log(res);
          dispatch(showLoader())
          dispatch(setUser(res.data.data))
          dispatch(hideLoader())
         } )
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
export const DeactiveLicenses =() => {
  return {
      type: DEACTIVE_LICENSE,
      
  }
}

export const HandelDeactivateLicense=(id)=>{
  return(dispatch)=>{


      return  Base.post(`sidlab/customers/deactivateLicense/${id}`)
      .then(res=>{if(res.data.message==="deactivated"){
          dispatch(DeactiveLicenses())

      }
    })
        
  }
}
export const HandelLogOut=()=>{
  return {
    type: LOGOUT,
    
}

}