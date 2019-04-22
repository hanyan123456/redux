import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from "../../store/index";
import * as Types from '../../store/actionType';
import * as Actions from '../../store/actionCreators';
class Home extends Component {
    //获取库中的数据
    // state= store.getState();
    state={
        inpVal:store.getState().todoList.inpVal,
        list:store.getState().todoList.list
    }
    componentDidMount(){
        // store.subscribe(this.handleStoreChange)
        //更新数据
        store.subscribe(()=>{
            this.setState({
                inpVal:store.getState().todoList.inpVal,
                list:store.getState().todoList.list
            })
        })
         fetch('https://jsonplaceholder.typicode.com/posts')
             .then(res=>res.json())
             // .then(data=>console.log(data))
    }
    handleChange=(e)=>{
        // const action={
        //     type:Types.CHANGE_INPUT_VAL,
        //     value:e.target.value
        // }
        const action =Actions.getChangeVal(e.target.value)
        store.dispatch(action)
    };
    handleAdd=()=>{
       // const  action={
       //     type:Types.ADD_TODO_ITEM,
       //     value:this.state.inpVal
       // }
        const action=Actions.addTodoList(this.state.inpVal)
        // console.log(this.state.inpVal)
       store.dispatch(action)
    }
    //更新库中的数据
    // handleStoreChange=()=>{
    //     this.setState(store.getState())
    // }
    deleteList=(index)=>{
     // const  action={
     //     type:Types.DELETE_TODO_ITEM,
     //     index
     // }
     const action=Actions.deleteTodoList(index)
     store.dispatch(action)
    }
    render() {
        return (
            <div>
                <input type="text"
                       placeholder="请输入内容"
                       onChange={ this.handleChange }
                       value={this.state.inpVal}
                />
                <button onClick={this.handleAdd}>添加</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={item+index}>{item}<button onClick={()=>{this.deleteList(index)}}>删除</button></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
