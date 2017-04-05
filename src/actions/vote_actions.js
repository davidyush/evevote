import { COPY_PEOPLE, GET_TWO_PERSONS } from '../constants/vote_constants'

export function copyPeople(people) {
  return {
    type: COPY_PEOPLE,
    payload: people
  }
}

// export function getTwo(arr, nameId) {
//   return {
//     type: GET_TWO_PERSONS,
//     payload: getTwo(arr, nameId)
//   }
// }
