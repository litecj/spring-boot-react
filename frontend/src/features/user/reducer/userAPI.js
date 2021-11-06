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


// // by. useradd
// // const userJoin = param => axios.post(`${SERVER}/users`, JSON.stringify(param),{headers})
// const userJoin = x => axios.post(`${SERVER}/users`, JSON.stringify(x),{headers})
const join = x => axios.post(`${SERVER}/users`, JSON.stringify(x),{headers})
// // by. userDetail
// const userDetail = x => axios.get(`${SERVER}/users/${x.userId}`)
const detail = x => axios.get(`${SERVER}/users/${x.userId}`)
// // by. userlist
// // const userList = () => axios.get(`${SERVER}/users`)
// const userList = x => axios.get(`${SERVER}/users/${x}`)
const list = x => axios.get(`${SERVER}/users/list/${x}`)
// // by. userLogin
// const userLogin = x => axios.post(`${SERVER}/users/login`, JSON.stringify(x),{headers})
const login = x => axios.post(`${SERVER}/users/login`, JSON.stringify(x),{headers})
// // by. userModify
// const userModify = x => axios.put(`${SERVER}/users`, JSON.stringify(x),{headers})
const modify = x => axios.put(`${SERVER}/users`, JSON.stringify(x),{headers})
// // by. userRemove
// const userRemove = x => axios.delete(`${SERVER}/users/${x}`, JSON.stringify(x),{headers})
const remove = x => axios.delete(`${SERVER}/users/${x}`,JSON.stringify(x),{headers})


const exist = x => axios.get(`${SERVER}/users/exist/${x}`)


export default {
  // userJoin,
  // userDetail,
  // userList,
  // userLogin,
  // userModify,
  // userRemove,
  // exist

  join,
  exist,
  detail,
  list,
  login,
  modify,
  remove
}
