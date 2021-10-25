// // A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }

import axios from 'axios';


const SERVER = 'http://localhost:8080'
const headers = {
  'Content-Type' : 'application/json',
  'Authorization': 'JWT fefege..'
}


// by. useradd
// const userJoin = param => axios.post(`${SERVER}/users`, JSON.stringify(param),{headers})
const userJoin = X => axios.post(`${SERVER}/users`, JSON.stringify(X),{headers})
// by. userDetail
const userFetchOne = X => axios.get(`${SERVER}/users/${X.userId}`)
// by. userlist
const userFetchList = () => axios.get(`${SERVER}/users`)
// by. userLogin
const userLogin = X => axios.post(`${SERVER}/users/login`, JSON.stringify(X),{headers})
// by. userModify
const userModify = X => axios.put(`${SERVER}/users`, JSON.stringify(X),{headers})
// by. userRemove
const userRemove = X => axios.delete(`${SERVER}/users/${X.userId}`, JSON.stringify(X.userId), {headers})


export default {
  userJoin,
  userFetchOne,
  userFetchList,
  userLogin,
  userModify,
  userRemove
}