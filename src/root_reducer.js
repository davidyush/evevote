import { combineReducers } from 'redux'
import user from './reducers/user'
import people from './reducers/people'
import vote from './reducers/vote'

export default combineReducers({
  user,
  people,
  vote
});
