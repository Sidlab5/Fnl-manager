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
        if(username===null || password===null){
          dispatch(setUser( null))
          return
        }
   
      dispatch(setUser({
        
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
                  macAddress: "null",
                  version: "null",
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
                  moduleModels: [ {
                    id: 1,
                    name: "ACOUSTICS"
                  },
                  {
                    id: 2,
                    name: "SAVING"
                  }]
              },
              {
                id: 1,
                macAddress: "null",
                version: "null",
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
                moduleModels:  [
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
            }]
      }))
      /*return  Base.post('sidlab/customers/login',{username, password})
      .then((user)=>dispatch(setUser(user)))*/
        
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