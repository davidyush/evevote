import { COPY_PEOPLE, GET_TWO_PERSONS, UPDATE_PEOPLE } from '../constants/vote_constants'

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
    case UPDATE_PEOPLE:
      return { ...state, gameUsers: updatePeople(action.payload.winer, action.payload.loser, state.gameUsers)};
    default:
      return state;
  }
}

function updatePeople(winer, loser, ladderUsers) {
  const newLadder = ladderUsers.map(person => {
    if(person.uid === winer.uid) {
      person.wins = [...person.wins, loser.uid, ...loser.wins];
      person.count++;
      return person;
    } else if(person.uid === loser.uid) {
      person.loses = [...person.loses, winer.uid, ...winer.loses];
      person.count++;
      return person;
    }
    return person;
  });
  return newLadder;
}
