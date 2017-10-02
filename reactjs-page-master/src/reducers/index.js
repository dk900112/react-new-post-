import { combineReducers } from 'redux';
import Reducers from './reducers';

const rootReducer = combineReducers({
  reducers: Reducers,
});

export default rootReducer;
