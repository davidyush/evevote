import {
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAIL,
  REMOVE_PERSON
} from '../constants/people_constants'

const initialState = {
  vkUsers: [],
  error: ''
}

export default function people(state = initialState, action) {
  switch(action.type) {
    case GET_PEOPLE_SUCCESS:
      return { ...state, vkUsers: action.payload, error: '' }
    case GET_PEOPLE_FAIL:
      return { ...state, error: action.payload.message }
    case REMOVE_PERSON:
      return { ...state, vkUsers: state.vkUsers.filter(person => person.uid !== action.payload) }
    default:
      return state
  }
}
