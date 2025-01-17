import {Actions} from "./action"


export const fetchUserAction=(payload)=>{
    return{
        type:Actions.userFetch,
        payload,
    }
        
}


export const UserErrorAction = (payload) => {
    return {
      type: userError,
      payload,
    };
  };
  
  export const userLoadingAction = (payload) => {
    return {
      type: userLoading,
      payload,
    };
  };
  
 
  