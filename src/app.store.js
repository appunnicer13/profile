import { createStore } from 'redux';
import  mainReducer  from './reducers';

let initialState = {
    data : []
};

let store = createStore(mainReducer);

export default store;