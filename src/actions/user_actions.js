import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_FAIL
} from '../constants/user_constants'

const VK = window.VK;

export function handleLogin() {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST
    });

    VK.Auth.login((r) => {
      if (r.session) {
        let username = r.session.user.first_name;
        dispatch({
          type: LOGIN_SUCCESS,
          payload: username
        });

      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Error Auth')
        });
      }
    });

  }
}

export function getPeople(name) {
  return function(dispatch) {
    dispatch({
      type: GET_PEOPLE_REQUEST
    });

    VK.Api.call('users.search', {q: name, fields: ['photo_200','city','country']}, (res) => {
      if(res) {
        let users = res.response;
        users.shift();
        users.forEach((person, index, arr) => {
          if(!person.photo_200) {
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
