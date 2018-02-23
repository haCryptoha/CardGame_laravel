import { combineReducers } from 'redux';
import user from './reducer_user';
import card from './reducer_card';
import transaction from './reducer_card';
const rootReducer = combineReducers({
  user,
  card,
  transaction
});

export default rootReducer;
