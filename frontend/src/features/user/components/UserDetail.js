import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function UserDetail() {
  const SERVER = 'http://localhost:8080'
  const history = useHistory()
  const [detail, setDetail] = useState()
  
  const fetchOne = () => {
    const sessionUser = JSON.parse(localStorage.getItem('sessionUser'))
    alert('사용자 아이디 : '+ sessionUser.userId)
    axios.get(`${SERVER}/users/${sessionUser.userId}`)
    .then(res => {
      setDetail(res.data)
    })
    .catch(err => {
        alert(`${err}`)
    })
    }
  useEffect(()=> {
    fetchOne()}, 
    [])


  return (
    <div>
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
              <li>
                  <input type="button" value="회원정보 수정"/>
              </li>
          </ul>

    </div>
  );
}