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
      return { ...state,
        gameUsers: updatePeople(action.payload.winer, action.payload.loser, state.gameUsers)
      };
    default:
      return state;
  }
}

function updatePeople(winer, loser, ladderUsers) {
  const newLadder = ladderUsers.map(person => {
    if(person.uid === winer.uid) {
      person.wins = [
        ...person.wins,
        ...addOnlySpecial(person.wins, [...loser.wins, loser.uid])
      ];
      person.count++;
      return person;
    } else if(person.uid === loser.uid) {
      person.loses = [
        ...person.loses,
        ...addOnlySpecial(person.loses, [...winer.loses, winer.uid])
      ];
      person.count++;
      return person;
    }
    return person;
  });
  return newLadder;
}


function addOnlySpecial(arr, addArr) {
  let result = [];
  addArr.forEach(uid => {
    if(!arr.includes(uid)) {
      result.push(uid);
    }
  });
  return result;
}
