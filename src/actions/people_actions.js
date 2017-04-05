import {
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAIL,
  REMOVE_PERSON
} from '../constants/people_constants'

const VK = window.VK;
const fields = ['photo_200','photo_50','city','country'];

export function getPeople(name) {
  return function(dispatch) {
    dispatch({
      type: GET_PEOPLE_REQUEST
    });

    VK.Api.call('users.search', {q: name, fields: fields }, (res) => {
      if(res) {
        let users = res.response;
        users.shift();
        users.forEach((person, index, arr) => {
          if(!person.photo_200 && !person.photo_50) {
            arr.splice(index,1);
          }
        });
        dispatch({
          type: GET_PEOPLE_SUCCESS,
          payload: users
        });
      } else {
        dispatch({
          type: GET_PEOPLE_FAIL,
          payload: new Error('Error request users.search')
        });
      }
    });

  }
}

export function removePerson(id) {
  return {
    type: REMOVE_PERSON,
    payload: id
  }
}
