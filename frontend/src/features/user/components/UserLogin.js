import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { loginPage } from '../reducer/userSlice';

export default function UserLogin() {
  // const SERVER = 'http://localhost:8080'
  const [login, setLogin] = useState({})
  const {username, password} = login
  const history = useHistory()
  const dispatch = useDispatch()

  const handleChange = e => {
    const {value, name} = e.target
    setLogin({
      ...login,
      [name] : value
    })
  }
  // const headers = {
  //   'Content-Type' : 'application/json',
  //   'Authorization': 'JWT fefege..'
  // }
  const handleClick =  async e => {
    e.preventDefault()
    e.stopPropagation()
    const loginRequest = {username, password}
    await dispatch(loginPage(loginRequest))
    const loginUSer = JSON.parse(localStorage.getItem('sessionUser'))
    if(loginUSer.userId !== ''){
      alert(`'${loginUSer.name}'님 로그인을 환영합니다.`)
      history.push("/users/detail")
    }else{
      alert('아이디, 비번 오류로 인한 로그인 실패')
      document.getElementById('username').value = ''
      document.getElementById('password').value = ''
      history.push("/users/login")}
    }


    /*
    userLogin(loginRequest)
    .then(res => {
      const user = JSON.stringify(res.data)
      if(user.userId !== null){
        alert('로그인 성공, '+JSON.stringify(res.data))
        localStorage.setItem('sessionUser', JSON.stringify(res.data))
        history.push("/users/detail")}
      else{
        alert('아이디, 비번 오류로 인한 로그인 실패, '+JSON.stringify(res.data))
        document.getElementById('username').value = ''
        document.getElementById('password').value = ''
        history.push("/users/login")}
      

    })
    .catch(err => {
      alert('접속 실패' + err)
    })
    */

  // const userLogin = loginRequest => 
  //   axios.post(`${SERVER}/users/login`, JSON.stringify(loginRequest),{headers})
  return (
    <form method="POST" style={{margin:'20px'}}>
      <h1>LOGIN</h1>
      <ul>
          <li><label for="id">아이디</label>
          <input type="text" id="username" 
              name='username' value={username} onChange={handleChange}/></li>
          <li><label for="pw">비밀번호</label>
          <input type="password" id="password" name="password" value={password} onChange={handleChange}/></li>
          <li><input type="button" title="로그인" value="로그인" onClick={handleClick}/></li>
      </ul>
</form>
  );
}