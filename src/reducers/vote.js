import { COPY_PEOPLE, GET_TWO_PERSONS } from '../constants/vote_constants'

const initialState = {
  gameUsers: [],
  twoPersons: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case COPY_PEOPLE:
      return { ...state, gameUsers: action.payload };
    case GET_TWO_PERSONS:
      return { ...state, twoPersons: action.payload };
    default:
      return state;
  }
}
