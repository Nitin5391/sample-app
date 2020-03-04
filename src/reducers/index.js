import {combineReducers} from 'redux';
import valueReducer from './valueReducer';

const rootReducers = combineReducers({
    value: valueReducer
});

export default rootReducers;