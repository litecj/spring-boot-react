import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { modify } from '../reducer/userSlice';
import styled from 'styled-components'
import { Layout } from 'features/common';

export default function UserModify() {
    // const history = useHistory()
    const dispatch = useDispatch()
    // const SERVER = 'http://localhost:8080'
    const sessionUser = JSON.parse(localStorage.getItem('sessionUser')); 
    // const [modify, setModify] = useState({
    const [param, setParam] = useState({
      userId: sessionUser.userId,
      username:sessionUser.username,
      password:sessionUser.password,
      email:sessionUser.email,
      name:sessionUser.name,
      regDate: sessionUser.regDate
  })

    const {userId, username, password, email, name} = modify
    const handleChange = e => {
        const { value, name } = e.target
        setParam({
            ...param,
            [name] : value
        })
    }
  
    // const headers = {
    //     'Content-Type' : 'application/json',
    //     'Authorization': 'JWT fefege..'
    // }
    // const UserModify = modifyRequest => 
    //           axios.put(`${SERVER}/users`, JSON.stringify(modifyRequest),{headers})

        // const handleSubmit = e => {
        //     e.preventDefault()
        //     const modifyRequest = {...modify}
        //     alert(`회원수정 정보: ${JSON.stringify(modifyRequest)}`)
        //     UserModify(modifyRequest)
        //     .then(res =>{
        //         alert('회원 정보 수정 성공')
        //         localStorage.setItem('sessionUser', JSON.stringify(res.data))
        //         history.push("/users/detail")
        //     })
        //     .catch(err =>{
        //         alert(`회원수정 실패 : ${err}`)
        //         })
        // }

    // const handleSubmit = useCallback(
    //     e => {
    //         e.preventDefault()
    //     const modifyRequest = {...modify}
    //     alert(`회원수정 정보: ${JSON.stringify(modifyRequest)}`)
    //     axios
    //     .put(`http://localhost:8080/users`, JSON.stringify(modifyRequest),{headers})
    //     .then(res =>{
    //         alert(`회원 정보 수정 성공 ${res.data}`)
    //         localStorage.setItem('sessionUser', JSON.stringify(res.data))
    //         history.push("/users/detail")
    //     })
    //     .catch(err =>{
    //         alert(`회원수정 실패 : ${err}`)
    //     })
    //     }
    // )

  return (
    <div>
        <Layout><Main>
            <h1>User Modify</h1>
        <form onSubmit={useCallback(e=> {e.preventDefault()
            // alert(`회원수정 정보: ${JSON.stringify(modifyRequest)}`)
            dispatch(modify({...param}))
        }
    )} method='PUT' style={{margin:'20px'}}>
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
                <br/>
              
                <li style={{listStyleType:'none'}}> 
                    <input type="submit" value="수정확인" />
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