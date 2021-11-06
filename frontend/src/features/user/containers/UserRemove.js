// import axios from 'axios';
import { Layout } from 'features/common';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { remove } from '../reducer/userSlice';
import styled from 'styled-components'

export default function UserRemove() {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  const sessionUser = JSON.parse(localStorage.getItem('sessionUser'))
  // const history = useHistory()
  // const SERVER = 'http://localhost:8080'
  // const headers = {
  //   'Content-Type' : 'application/json',
  //   'Authorization': 'JWT fefege..'
  // }

  // const handleChange = e => {
  //   setPassword(e.target.value)
  // }
  // const handleClick = e => {
  //   e.preventDefault()
  //   // const removeRequest = sessionUser
  //   if(sessionUser.password === password){
  //     // axios.delete(`${SERVER}/users/${sessionUser.userId}`, JSON.stringify(sessionUser.userId), {headers})
  //     UserRemove(sessionUser)
  //     .then(res => {
  //       console.log(res.data)
  //       localStorage.setItem('sessionUser', '')
  //       history.push('/')
  //     })
  //     .catch(err => console.log(err))
  //   }else{
  //     alert('입력된 비밀번호가 틀립니다')
  //     document.getElementById('password').value = ''
  //   }

  // }

  return (
      <div>
        <Layout><Main>
          <h1>User Remove</h1>
          <form method="DELETE" onSubmit={useCallback(e => {
              e.preventDefault();
              (sessionUser.password === password) ? dispatch(remove(sessionUser.userId))
                : document.getElementById('password').value = ''
              // sessionUser.password == password
              //   ? dispatch(removePage(sessionUser.userId))
              //   : alert('비밀번호가 틀렸습니다.') 
              //     document.getElementById('password').value = ''
            })
          }>
          {/* <form method="DELETE" onSubmit={
            useCallback(e => {
              dispatch(removePage(x))
            })
          }> */}
            <ul>
              <li>
                <label>
                    <span>회원번호 : {sessionUser.userId} </span>
                </label>
              </li>
              <li>    
                <label>
                    아이디: <span> {sessionUser.username} </span>
                </label>
              </li>

                <li><label for="password">비밀번호</label>
                <input type="password" id="password" name="password" onChange={e=>{setPassword(e.target.value)}}/></li>
                <li><input type="submit" value="탈퇴 요청" /></li>
                <li><input type="button" value="탈퇴 취소" onClick={e => window.location.href = `/users/detail`}/></li>
            </ul>
          </form>
          </Main></Layout>
      </div>
  );
}

const Main = styled.div`
width: 500px;
margin: 0 auto;
text-decoration:none
text-align: center;
`