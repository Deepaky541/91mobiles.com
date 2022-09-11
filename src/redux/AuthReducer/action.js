import * as types from "./actionTypes";
import axios from "axios";

const login = (payload) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios({
    method: "get",
    url: "http://localhost:8080/users",
  })
    .then((r) => {
         let res=false;
         r.data.forEach((el)=>{
             if(el.email==payload.email && el.password==payload.password)
             {
                 localStorage.setItem("email",`${el.email}`)
                 localStorage.setItem("password", `${el.password}`);
                 res=true;
             }
         })
         if(res==true)
         {
            return dispatch({ type: types.LOGIN_SUCCESS, payload: r.data });
         }
         else{
             alert("details are wrong")
            return dispatch({ type: types.LOGIN_FAILURE });
         }
    })
    .catch((e) => dispatch({ type: types.LOGIN_FAILURE }));
};

export { login };
