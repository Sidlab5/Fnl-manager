import { SET_ACTIVE_LICENSE, SET_USER } from "../actions/LicenseManager"
export default function licenseManager(state ={},action) {
        switch (action.type) {
           
            case SET_USER:
                return {
                    ...state,
                    userData: action.user
                }
             case SET_ACTIVE_LICENSE:
                 return{
                    ...state,
                    activeLicenseid: action.id
                 }   
          
            default:
                return state
        }
  }