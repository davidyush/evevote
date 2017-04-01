import { combineReducers } from 'redux'
import user from './reducers/user'
import people from './reducers/people'

export default combineReducers({
  user,
  people
});
