import { Layout } from 'features/common';
import React, { useState, useEffect, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { Link} from 'react-router-dom';
import { Logout } from '..';
// import axios from 'axios';
import styled from "styled-components";

export default function UserDetail() {
    // const SERVER = 'http://localhost:8080'
    const history = useHistory()
    // const dispatch = useDispatch()
    const detail = JSON.parse(localStorage.getItem('sessionUser'))
    // const [detail, setDetail] = useState({
    //     userId:'', username:'', password:'', email:'', name:'', regDate: new Date().toLocaleDateString()
    // })

    // const userDetail = () => {
    //     const sessionUser = JSON.parse(localStorage.getItem('sessionUser'))
    //     // alert('사용자 아이디 : '+ sessionUser.userId)
    //     // axios.get(`${SERVER}/users/${sessionUser.userId}`)
    //     userDetail(sessionUser)
    //     .then(res => {
    //     setDetail(res.data)
    //     })
    //     .catch(err => {
    //         alert(`${err}`)
    //     })
    //     }
    // useEffect(()=> {
    //     userDetail()}, 
    //     [])
    // const logout = e => {
    //     e.preventDefault()
    //     localStorage.setItem('sessionUser','')
    //     history.push('/')
    // }


  return (
    <div>
        <Layout>
            <Main>
        <form style={{margin:'20px'}}>
          <h1>회원 정보</h1>
          <ul>
              <li>
                  <label>
                      <span>회원번호 : {detail.userId} </span>
                  </label>
              </li>
              <li>    
                  <label>
                      아이디: <span> {detail.username} </span>
                  </label>
              </li>
              <li>
                  <label>
                      이메일: <span> {detail.email} </span>
                  </label>
              </li>
              <li>
                  <label>
                      비밀번호: <span>***안 알려 줄꺼지롱 ~****</span>
                  </label>
              </li>
              <li>
                  <label>
                      이름: <span> {detail.name} </span>
                  </label>
              </li>

              <br/>
              
              <li style={{listStyleType:'none'}}>
                  <input style={{marginRight:'20px'}} type="button" value="회원정보 수정" onClick={()=> history.push('/users/modify')}/>
                  {/* <input type="button" value="로그아웃" onClick={dispatch(logout())}/> */}
                  <Logout/>
              </li>
          </ul>
        </form>
        </Main>
        </Layout>
    </div>
  );
}

const Main = styled.div`
width: 500px;
margin: 0 auto;
text-decoration:none
text-align: center;
`