import fetch from 'cross-fetch'
import axios from 'axios';


export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'

function login(username) {
  return {
    type: LOGIN,
    username
  }
}

function authorized(token) {
  return {
    type: LOGIN_SUCCESS,
    token
  }
}

function loginFailed(error) {
  console.log('loginFailed', error)
  return {
    type: LOGIN_FAILED,
    error
  }
}

//using fetch to post will fix later
// export function requestLogin(username, password) {
//   return dispatch => {
//     dispatch(login(username));
//     return fetch(`http://localhost:3000/api/auth/`, {
//       method: 'post',
//       body: JSON.stringify({ username, password })
//     })
//       .then(function (response) {
//         console.log('response')
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response.json();
//       }).then(function (response) {
//         console.log("ok");
//         dispatch(authorized(json.token))
//       }).catch(function (error) {
//         console.log('error', error);
//         dispatch(loginFailed(error))
//       });
//   }
// }

//Using Axios to post
export function requestLogin(username, password) {
  return dispatch => {
    dispatch(login(username));
    return axios.post('api/auth', {
      username, password
    }).then(function (response) {
        console.log(response.status, 'kkkk');
        if (!response.status == 200) {
          throw Error(response.statusText);
        }
        dispatch(authorized(response.data.token))
      }).catch(function (error) {
        console.log('error', error);
        dispatch(loginFailed(error))
      });
  }
}
