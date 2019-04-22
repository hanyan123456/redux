import * as Types from './actionType';
const initState={
    inpVal:'',
    list:[],
    count:0
}
export default (state=initState,action) =>{
    // console.log(action);
    const  newState=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case Types.CHANGE_INPUT_VAL:
            newState.inpVal=action.value;
            // console.log(newState.inpVal)
            return newState;
        case Types.ADD_TODO_ITEM:
            newState.list.push(action.value);
            // console.log(newState.list)
            newState.inpVal='';
            return newState;
        case Types.DELETE_TODO_ITEM:
            newState.list.splice(action.index,1);
            return newState;
        case  Types.ADD_COUNT:
                newState.count++ ;
                return newState;


    }
    return state;
}