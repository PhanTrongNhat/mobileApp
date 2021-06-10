let stateApp = {
    products:[]
}

const getData = () => {
    return {
        type:'GETDATA'
    }
}

const  reducer = (state = stateApp,action) => {
    switch(action.type){
        case 'GETDATA':
            return {...state}
    }
    return state;
}

export default reducer;