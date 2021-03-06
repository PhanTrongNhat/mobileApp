import axios from "axios";
const SETCART = "SETCART";
const SETCARTCOUNT = "SETCARTCOUNT";
const LOADDATA = "GETDATA";
const GETLENGTH = "GETLENGTH";
const DELETEITEM = "DELETEITEM";
const REDUCEITEM = "REDUCEITEM";
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

// action get data
export const loadData = () => async (dispatch) => {
  const res = await axios.get("https://2g8ge.sse.codesandbox.io/cart");
  dispatch({ type: LOADDATA, payload: res.data });
};

export const reduceItem = (id) => {
  return {
    type: REDUCEITEM,
    payload: id,
  };
};

export const setCart = (item) => {
  return {
    type: SETCART,
    payload: item,
  };
};
export const setCartCount = (item) => {
  return {
    type: SETCARTCOUNT,
    payload: { ...item },
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
    case REDUCEITEM: {
      let arr, index;
      arr = [...state.items];
      index = arr.findIndex((item) => item.id === action.payload);

      if (arr[index].count === 1) {
        state.count--;
        state.total -= arr[index].cost;
        arr.splice(index, 1);
        setData({ ...state, items: arr });
        return {
          ...state,
          items: arr,
        };
      } else {
        arr[index].count--;
        state.count--;
        state.total -= arr[index].cost;
        setData({ ...state, items: arr });
        return {
          ...state,
          items: arr,
        };
      }
    }

    case LOADDATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    case SETCART: {
      //khai báo mảng tạm và biến lưu index sản phẩm trong giỏ hàng
      let arr1, temp;
      arr1 = [...state.items];
      temp = arr.findIndex((item) => item.id === action.payload.id);
      console.log(state);
      //kiểm tra sản phẩm tồn tại ở giỏ hàng chưa
      if (state.count === 0 || temp === -1) {
        //cộng biến thêm 1 và update giỏ hàng

        action.payload.count = 1;
        arr1.push(action.payload);
        state.count++;
        state.total += action.payload.cost;
        //storeData({ ...state, items: arr });
        setData({ ...state, items: arr });
        return {
          ...state,
          items: arr,
        };
      } //cộng biến thêm 1 và update giỏ hàng

      arr1[temp].count++;
      state.count++;
      state.total += action.payload.cost;

      setData({ ...state, items: arr1 });
      return {
        ...state,
        items: arr1,
      };
    }

    case DELETEITEM: {
      let arr = [...state.items];
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
    }
    case SETCARTCOUNT: {
      //khai báo mảng tạm và biến lưu index sản phẩm trong giỏ hàng
      let arr, index;
      arr = [...state.items];
      index = arr.findIndex((item) => item.id === action.payload.id);
      console.log(state);
      //kiểm tra sản phẩm tồn tại ở giỏ hàng chưa
      if (action.payload.count === 0) {
        return {
          ...state,
        };
      }
      if (state.count === 0 || index === -1) {
        //cộng biến thêm 1 và update giỏ hàng
        arr.push(action.payload);
        state.count += action.payload.count;
        state.total += action.payload.count * action.payload.cost;
        //storeData({ ...state, items: arr });
        setData({ ...state, items: arr });
        return {
          ...state,
          items: arr,
        };
      } //cộng biến thêm 1 và update giỏ hàng
      arr[index].count += action.payload.count;
      state.count += action.payload.count;
      state.total += action.payload.cost * action.payload.count;
      setData({ ...state, items: arr });
      return {
        ...state,
        items: arr,
      };
    }
    default:
      return state;
  }
};

export default reducer;
