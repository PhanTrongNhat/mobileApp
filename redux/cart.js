const SETCART = 'SETCART';
const GETDATA = 'GETDATA';
const GETLENGTH = 'GETLENGTH';
const DELETEITEM = 'DELETEITEM';
let initState = {
    items:[],
    total: 0,
    count :0
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
export const deleteItem = (id) => {
    return {
        type: DELETEITEM,
        payload: id
       }
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
          
           console.log('-----------------------');
           let arr,temp;
           arr = [...state.items];
           temp = arr.findIndex(item=>
                item.id === action.payload.id
            )
            
            
           if(state.count === 0 || temp === -1){     
                action.payload.count = 1;
                
                arr.push(action.payload);
                state.count ++;
                state.total += action.payload.cost;
                //console.log(arr);
                return {  
                ...state, items:arr
                }

             }
                arr[temp].count ++;
               
               
                state.count ++;
                state.total += action.payload.cost;
                //console.log(arr);
                return {  
                ...state, items:arr
                }
            //state.count ++;

           
            
        
        case DELETEITEM:
                arr = [...state.items];
                let index = arr.findIndex(item=> item.id === action.payload);
                state.total -= arr[index].cost * arr[index].count;
                state.count -= arr[index].count;
                arr.splice(index,1);
            return { 
                ...state,
                items: arr

            };
        
        default:
            return state;
    }
   
}

export default reducer;