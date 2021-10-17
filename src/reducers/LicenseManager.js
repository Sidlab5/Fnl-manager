import { SET_ACTIVE_LICENSE, SET_USER , HIDE_LOADER,  SHOW_LOADER} from "../actions/LicenseManager"
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