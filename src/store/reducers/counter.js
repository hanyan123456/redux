import * as Types from '../actionType';
const initState={
    count:0
}
export default (state=initState,action) =>{
    // console.log(action);
    const  newState=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case  Types.ADD_COUNT:
            newState.count++ ;
            return newState;
    }
    return state;
}