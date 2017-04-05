import { COPY_PEOPLE } from '../constants/vote_constants'

const initialState = {
  gameUsers: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case COPY_PEOPLE:
      return { ...state, gameUsers: action.payload };
    default:
      return state;
  }
}
