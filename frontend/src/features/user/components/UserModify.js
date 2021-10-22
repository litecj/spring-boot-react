import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

export default function UserModify() {
  const history = useHistory()
    const SERVER = 'http://localhost:8080'
    const sessionUser = JSON.parse(localStorage.getItem('sessionUser')); 
    const [modify, setModify] = useState({
      userId: sessionUser.userId,
      username:sessionUser.username,
      password:sessionUser.password,
      email:sessionUser.email,
      name:sessionUser.name,
      regDate: sessionUser.regDate
  })

  const {userId, username, password, email, name} = modify
  const handleChange = e =>{
      const {value, name} = e.target
      setModify({
          ...modify,
          [name] : value
      })
  }
  
  const UserModify = modifyRequest => 
          axios.post(`${SERVER}/users`, JSON.stringify(modifyRequest),{headers})

  const headers = {
      'Content-Type' : 'application/json',
      'Authorization': 'JWT fefege..'
    }

  const handleSubmit = e => {
      e.preventDefault()
      const modifyRequest = {...modify}
      alert(`회원 수정 정보: ${JSON.stringify(modifyRequest)}`)
      UserModify(modifyRequest)
      .then(res =>{
          alert('회원 정보 수정 성공' + res)
          // localStorage.setItem('sessionUser', JSON.stringify(res.data))
          history.push('/users/detail')
      })
      .catch(err =>{
          alert(`회원 정보 수정 실패 : ${err}`)
      })

  }

  return (
    <div>
            <h1>User Modify</h1>
        <form onSubmit={handleSubmit} method='POST'>
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
                <li>
                    <label>
                        이메일: <input type="email" id="email" name ='email' placeholder={sessionUser.email} value={email} onChange = {handleChange}/>
                    </label>
                </li>
                <li>
                    <label>
                        비밀번호: <input type="password" id="password" name= 'password' placeholder={sessionUser.password} value={password} onChange = {handleChange}/>
                    </label>
                </li>
                {/* <li>
                    <label>
                        비밀번호 확인: <input type="password" id="check_pwd"/>
                    </label>
                </li> */}
                <li>
                    <label>
                        이름: <input type="text" id="name" name='name' placeholder={sessionUser.name} value={name} onChange = {handleChange}/>
                        {/* <input type="hidden" id="reg_date" name='reg_date' value={} /> */}
                    </label>
                </li>
                <li>
                    <input type="submit" value="수정확인" />
                </li>
            </ul>
        </form>
    </div>
  );
}