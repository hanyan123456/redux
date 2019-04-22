import {createStore,applyMiddleware} from 'redux';
import reducer from "./reducers";
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import mySaga from './saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware=createSagaMiddleware();
const store=createStore(
    reducer,
    // applyMiddleware(thunk,promise)
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(mySaga)
 export  default store;
