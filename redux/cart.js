const SETCART = 'SETCART';
const GETDATA = 'GETDATA';
const GETLENGTH = 'GETLENGTH';
let initState = {
    items:[]
}
//action set data
export const  setCart = (item) => {
    return {
        type:  SETCART,
        payload: item
    }
}
// action get data
export const getData = () => {
    return {
        type: GETDATA    }
}
export const getLengthCart = () => {
    return {
        type: GETLENGTH   }
}


const  reducer = (state = initState,action) => {
    switch(action.type){
        case GETDATA:
            return {
                ...state }
        case SETCART:
           //console.log(action);
           let arr = [...state.items];
           arr.push(action.payload)
          // console.log(arr);
            return {  
               ...state, items:arr   
            }
        case GETLENGTH:
            return { ...state};
        default:
            return state;
    }
   
}

export default reducer;