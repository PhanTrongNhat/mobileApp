import axios from "axios";
const RESTORE_TOKEN = "RESTORE_TOKEN";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";
const LOADDATA = "LOADDATA";
const setData = async (data) =>
  await axios
    .post("https://2g8ge.sse.codesandbox.io/cart", data)
    .catch((error) => {
      console.log(error);
    });
let initState = {
  user:{
    username: "",
    password: "",
    name: "",
    cart:{},
    signin: false,
  }
};
//action
export const loadData = () => async (dispatch) => {
  const res = await axios.get("https://2g8ge.sse.codesandbox.io/user");
  dispatch({ type: LOADDATA, payload: res.data });
};

export const signIn = (infor) => {
  
  return {
    type: "SIGN_IN",
    payload: infor
  };
};

export const signOut = (id) => {
  return {
    type: "SIGN_OUT",
  };
};

export const restoreToken = () => {
  return {
    type: GETLENGTH,
  };
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOADDATA:
      return {
        ...state,...action.payload
      
      };
    // case "RESTORE_TOKEN":
    //   return {
    //     ...state,
    //     userToken: action.token,
    //     isLoading: false,
    //   };
    case "SIGN_IN":
      // set biến giá trị khi đăng nhập
      console.log(typeof state.password,typeof action.payload.password);
      console.log(state.password, action.payload.password);
      console.log(state.username, action.payload.username);

      if(state.password == action.payload.password && 
        state.username == action.payload.username){
          return {
            ...state,
            signin: true,
          };
        }else{
          alert('userName or password incorrect!')
          return {
            ...state,
            signin: false,
          };
        } 
    case "SIGN_OUT":
      return {
        ...state,
        signin: false
      };
    default: {
      return state;
    }
  }
};
export default reducer;
