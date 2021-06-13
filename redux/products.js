import axios from "axios";
const SETDATA = "SETDATA";
const GETDATA = "GETDATA";
let initState = {
  products: [],
};
//action
export const setData = (product) => {
  return {
    type: SETDATA,
    payload: product,
  };
};
export const getData = () => {
  return {
    type: "GETDATA",
  };
};
export const fetchData = () => async (dispatch) => {
  const res = await axios.get("https://2g8ge.sse.codesandbox.io/products");
  dispatch({ type: SETDATA, payload: res.data });
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "GETDATA":
      return {
        ...state,
      };
    case SETDATA:
      //console.log({...state.products,...action.payload});

      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
