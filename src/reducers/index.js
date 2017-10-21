/**
 * Created by ApunniM on 8/11/2017.
 */
import { combineReducers } from 'redux'

const mainReducer = combineReducers({
    data : (state=[],action) => { return state; }
});

export default mainReducer;