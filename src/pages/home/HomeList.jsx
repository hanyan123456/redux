import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from '../../store/index';
import * as Actions from '../../store/actionCreators'
class HomeList extends Component {
    state={
        count:store.getState().counter.count
    }
    // state={
    //     count:0
    // }
    render() {
        const {count}=this.state;
        return (
            <div>
                <span>{count}</span><button onClick={this.addCount}>增加</button>
            </div>
        );
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                count:store.getState().counter.count
            })
        })
    }
    // handleStoreChange=()=>{
    //     this.setState(store.getState().counter.count)
    // }
    addCount=()=>{
        // let  {count}=this.state
        // count++
        // this.setState({
        //     count
        // })
        const  action=Actions.addCount(this.state.count)
        store.dispatch(action)
    }
}

HomeList.propTypes = {};

export default HomeList;
