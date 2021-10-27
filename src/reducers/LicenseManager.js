import { SET_ACTIVE_LICENSE, SET_USER , HIDE_LOADER,  SHOW_LOADER,DEACTIVE_LICENSE,LOGOUT} from "../actions/LicenseManager"
export default function licenseManager(state = {}, action)  {
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
                 case DEACTIVE_LICENSE:
                  return{
                     ...state,
                     activeLicenseid: null,
                     userData:null
                  }  
                  case LOGOUT:
                    return{
                       ...state,
                       userData:null
                    }     
                 case HIDE_LOADER:
                    return {
                      ...state,
                      loading: false,
                    };
                  case SHOW_LOADER:
                    return {
                      ...state,
                      loading: true,
                    };
          
          
            default:
                return state
        }
  }