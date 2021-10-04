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
   
      dispatch(setUser({
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