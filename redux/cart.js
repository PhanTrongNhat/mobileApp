import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
const SETCART = "SETCART";
const LOADDATA = "GETDATA";
const GETLENGTH = "GETLENGTH";
const DELETEITEM = "DELETEITEM";
const setData = async (data) =>
  await axios
    .post("https://2g8ge.sse.codesandbox.io/cart", data)
    .catch((error) => {
      console.log(error);
    });
const initState = {
  items: [],
  total: 0,
  count: 0,
};
// const initState = {
//   items: [],
//   total: 0,
//   count: 0,
// };
//lấy dữ liệu từ AsyncStorage
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("cart", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const getAsync = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("cart");
    initState = JSON.parse(jsonValue);

    return jsonValue != null ? await JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
// action get data
export const loadData = () => async (dispatch) => {
  const res = await axios.get("https://2g8ge.sse.codesandbox.io/cart");
  dispatch({ type: LOADDATA, payload: res.data });
};
export const setCart = (item) => {
  return {
    type: SETCART,
    payload: item,
  };
};
export const deleteItem = (id) => {
  return {
    type: DELETEITEM,
    payload: id,
  };
};
export const getLengthCart = () => {
  return {
    type: GETLENGTH,
  };
};

//reducer
const reducer = (state = initState, action) => {
  switch (action.type) {
    case LOADDATA:
      return {
        ...state,
        ...action.payload,
      };
    case SETCART:
      //khai báo mảng tạm và biến lưu index sản phẩm trong giỏ hàng
      let arr, temp;
      arr = [...state.items];
      temp = arr.findIndex((item) => item.id === action.payload.id);

      //kiểm tra sản phẩm tồn tại ở giỏ hàng chưa
      if (state.count === 0 || temp === -1) {
        //cộng biến thêm 1 và update giỏ hàng
        action.payload.count = 1;
        arr.push(action.payload);
        state.count++;
        state.total += action.payload.cost;
        //storeData({ ...state, items: arr });
        setData({ ...state, items: arr });
        return {
          ...state,
          items: arr,
        };
      } //cộng biến thêm 1 và update giỏ hàng
      arr[temp].count++;
      state.count++;
      state.total += action.payload.cost;
      storeData({ ...state, items: arr });
      setData({ ...state, items: arr });
      return {
        ...state,
        items: arr,
      };

    case DELETEITEM:
      arr = [...state.items];
      //tìm vị trí phần tử cần xóa
      let index = arr.findIndex((item) => item.id === action.payload);
      state.total -= arr[index].cost * arr[index].count;
      state.count -= arr[index].count;
      arr.splice(index, 1);
      setData({ ...state, items: arr });

      return {
        ...state,
        items: arr,
      };

    default:
      return state;
  }
};

export default reducer;
