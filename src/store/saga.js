import {takeEvery,put} from 'redux-saga/effects';
import * as Types from './actionType';
import axios from 'axios';
import* as action from './actionCreators'
function* mySaga() {
         yield takeEvery(Types.ADD_TODO_ITEM,addItem);
         yield takeEvery(Types.GET_TODO_ITEM,getItem)
}
function* addItem() {
console.log(1111)
}
//saga请求数据
function* getItem() {
    try{
        const data=yield  axios.get('list.json');
        const action=action.getInitList(data);
        yield put(action)
    }catch (err){
        console.log(err)
    }
}
export default mySaga;