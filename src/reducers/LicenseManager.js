import { SET_ACTIVE_LICENSE, SET_USER } from "../actions/LicenseManager"
export default function licenseManager(state = 
    {
        
        userData: {
            id: 6,
            firstName: "mayar",
            lastName: "zakaria",
            email: "mayar_zakaria@yahoo.com",
            password: null,
            organization: "elnady",
            phoneNumber: "null",
            city: null,
            country: {
                id: 1,
                name: "Egypt"
            },
            roles: null,
            licenses: [
                
                {
                    id: 18,
                    macAddress: null,
                    version: null,
                    seats: 0,
                    daysNumber: 30,
                    licenseCategoryModel: null,
                    licenseTypeModel: {
                        id: 1,
                        name: "trial"
                    },
                    requestDate: "13/9/2021",
                    renewDate: "13/10/2021",
                    studentStartDate: null,
                    studentEndDate: null,
                    moduleModels: null
                }
            ]
        },activeLicenseid:18,
    },
    action)  {
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