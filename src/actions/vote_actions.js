import { COPY_PEOPLE, GET_TWO_PERSONS, UPDATE_PEOPLE } from '../constants/vote_constants'
import { getTwo } from '../helpers/algo'

export function copyPeople(people) {
  return {
    type: COPY_PEOPLE,
    payload: people
  }
}

export function getTwoPersons(arr, nameId) {
  return {
    type: GET_TWO_PERSONS,
    payload: getTwo(arr, nameId)
  }
}

export function updateWinerLoser(winer, loser) {
  return {
    type: UPDATE_PEOPLE,
    payload: { winer, loser }
  }
}
