import AsyncStorage from "@react-native-async-storage/async-storage";
const SETCART = "SETCART";
const GETDATA = "GETDATA";
const GETLENGTH = "GETLENGTH";
const DELETEITEM = "DELETEITEM";
// khởi tạo state
const initState = {
  items: [],
  total: 0,
  count: 0,
};
//lấy dữ liệu từ AsyncStorage
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("state", jsonValue);
  } catch (e) {
    console.log(e);
  }
};
const getAsync = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("state");
    initState = JSON.parse(jsonValue);

    return jsonValue != null ? await JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
// action get data
export const getData = () => {
  getAsync();
  return {
    type: GETDATA,
  };
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
    case GETDATA:
      return {
        ...state,
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
        storeData({ ...state, items: arr });
        return {
          ...state,
          items: arr,
        };
      } //cộng biến thêm 1 và update giỏ hàng
      arr[temp].count++;
      state.count++;
      state.total += action.payload.cost;
      storeData({ ...state, items: arr });
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
      return {
        ...state,
        items: arr,
      };

    default:
      return state;
  }
};

export default reducer;
