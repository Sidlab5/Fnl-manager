import { SET_ACTIVE_LICENSE, SET_USER } from "../actions/LicenseManager"
export default function licenseManager(
    state = 
    {
       
        // licenseData: {},
        licenseData: {
            access_token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5b3Vzc2lmQHNpZGxhYi5zZSIsImlhdCI6MTYyNTc2OTYwMCwiZXhwIjoxNjI1ODEyODAwfQ.27TqayRlIaYVrIFs8aOVLCWVKWGN11M5TS9uLYzORVo",
        //    access_token: '',
            customer: {
              id: 1,
              firstName: "Youssif",
              lastName: "Tawfik",
              email: "youssif@sidlab.se",
              password: "$2a$10$yoLXRv8HhGTy/fjYfFJszOdl2iSQdLkiUqrXcxhr0WO.Wz11.vuAi",
              organization: "Elnady",
              phoneNumber: "01207309189",
              city: "Tokyo",
              country: null,
              licenses: [
                {
                  id: 1,
                  macAddress: "zywik72qty16h2",
                  version: "Version 5.1",
                  seats: 0,
                  daysNumber: 360,
                  licenseCategoryModel: {
                    id: 1,
                    name: "CUSTOMER"
                  },
                  licenseTypeModel: {
                    id: 2,
                    name: "CPU"
                  },
                  requestDate: null,
                  renewDate: null,
                  studentStartDate: "",
                  studentEndDate: "",
                  moduleModels: [
                    {
                      id: 1,
                      name: "ACOUSTICS"
                    },
                    {
                      id: 2,
                      name: "SAVING"
                    },
                    {
                      id: 3,
                      name: "MATLAB"
                    },
                    {
                      id: 4,
                      name: "ACOUSTICS"
                    }
                  ]
                },
                {
                    id: 2,
                    macAddress: "zywik72qty16h2",
                    version: "Version 5.1",
                    seats: 0,
                    daysNumber: 360,
                    licenseCategoryModel: {
                      id: 1,
                      name: "CUSTOMER"
                    },
                    licenseTypeModel: {
                      id: 2,
                      name: "CPU"
                    },
                    requestDate: null,
                    renewDate: null,
                    studentStartDate: "",
                    studentEndDate: "",
                    moduleModels: [
                      {
                        id: 1,
                        name: "ACOUSTICS"
                      },
                      {
                        id: 2,
                        name: "SAVING"
                      },
                     
                     
                    ]
                  }
              ]
            }
          },
         activeLicenseid: null
    },
    action) {

        switch (action.type) {
           
            case SET_USER:
                return {
                    ...state,
                    licenseData: action.user
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