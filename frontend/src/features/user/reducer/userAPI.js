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
const userJoin = x => axios.post(`${SERVER}/users`, JSON.stringify(x),{headers})
// by. userDetail
const userDetail = x => axios.get(`${SERVER}/users/${x.userId}`)
// by. userlist
const userList = () => axios.get(`${SERVER}/users`)
// by. userLogin
const userLogin = x => axios.post(`${SERVER}/users/login`, JSON.stringify(x),{headers})
// by. userModify
const userModify = x => axios.put(`${SERVER}/users`, JSON.stringify(x),{headers})
// by. userRemove
const userRemove = x => axios.delete(`${SERVER}/users/${x.userId}`)


export default {
  userJoin,
  userDetail,
  userList,
  userLogin,
  userModify,
  userRemove
}
