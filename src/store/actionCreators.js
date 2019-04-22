import  * as Types from './actionType';
import axios from 'axios'
export const getChangeVal=(value)=>{
    return{
        type:Types.CHANGE_INPUT_VAL,
        value
    }
}
export const addTodoList=(value)=>{
    return{
        type:Types.ADD_TODO_ITEM,
        value
    }
}
export const  deleteTodoList=(index)=>{
      return{
          type:Types.DELETE_TODO_ITEM,
          index
      }
}
export  const addCount=(value)=>{
    return{
        type:Types.ADD_COUNT,
        value
    }
}
export  const getInitList=(list)=>{
    return{
        type:Types.GET_TODO_ITEM,
        list
    }
}
//获取数据
// export const getIntList=list=>{
//会报错
//     let data
//     axios.get('list.json').then(res=>{
//     data=res
//     })
//     return{
//         type:Types.GET_LIST,
//         list:data
//     }
// }
//通过thunk获取数据
// export  const getIntList=list=>{
//     return dispatch=>{
//         axios.get('list.json').then(res=>{
//             dispatch({
//                 type:Types.GET_LIST,
//                  list:res
//             })
//         })
//     }
// }
//promise 异步获取数据
// export  const getIntList=list=>{
//     return new  Promise((resolve,reject)=>{
//         axios.get('list.json').then(res=>{
//             resolve({
//                 type:Types.GET_LIST,
//                  list:res
//             })
//         })
//     })
//
// }