const RESTORE_TOKEN = "RESTORE_TOKEN";
const SIGN_IN = "SIGN_IN";
const SIGN_OUT = "SIGN_OUT";

let initState = {
  // isLoading: true,
  // isSignout: false,
  signin: false,
  // userToken: null,
  // user:'abc',
  // password: "abc"
};
//action
export const signIn = (infor) => {
  
  return {
    type: "SIGN_IN",
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
    case "RESTORE_TOKEN":
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      // set biến giá trị khi đăng nhập
      return {
        ...state,
        signin: true,
      };
    case "SIGN_OUT":
      return {
        ...state,
        isSignout: true,
        userToken: null,
      };
    default: {
      return state;
    }
  }
};
export default reducer;
