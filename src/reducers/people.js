import {
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAIL
} from '../constants/user_constants'

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
    default:
      return state
  }
}
