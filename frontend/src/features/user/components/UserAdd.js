// import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinPage } from 'features/user/reducer/userSlice'

// import { useSelector, useDispatch } from 'react-redux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './counterSlice';
// import styles from './Counter.module.css';


export default function UserAdd() {
    const history = useHistory()
    // const SERVER = 'http://localhost:8080'
    const dispatch = useDispatch()
    const [join, setJoin] = useState({
        username:'', password:'', email:'', name:'', regDate: new Date().toLocaleDateString()
    })

    const {username, password, email, name} = join
    const handleChange = useCallback(
        e => {
            const { value, name } = e.target
            setJoin({
                ...join,
                [name] : value
            })
        }, [join]
    ) 
    // const handleChange = useCallback(e => {
    //     const {value, name} = e.target
    //     setJoin({
    //         ...join,
    //         [name] : value
    //     })
    // }, [join]
    // )
    
    // const userJoin = joinRequest => 
    //         axios.post(`${SERVER}/users`, JSON.stringify(joinRequest),{headers})
    // const headers = {
    //     'Content-Type' : 'application/json',
    //     'Authorization': 'JWT fefege..'
    //   }

      const handleSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()     //
        /* const formData = new FormData()
        formData.append('username', join.username)
        formData.append('password', join.password)
        formData.append('email', join.email)
        formData.append('name', join.name)
        formData.append('regDate', join.regDate)

        alert(`회원가입 ID 2 : ${formData.get('username')}`)
        await dispatch(joinPage(formData))
        alert(`${join.username} 회원가입 환영`)
        history.push('/users/login') */

        const json = {
            'username': join.username,
            'password': join.password,
            'email': join.email,
            'name': join.name,
            'regDate': join.regDate
        }
        alert(`회원가입 정보: ${JSON.stringify(json)}`)
        await dispatch(joinPage(json))
        alert(`${join.username} 회원가입 환영`)
        history.push('/users/login')
        // const joinRequest = {...join}
        // alert(`회원가입 정보: ${JSON.stringify(joinRequest)}`)
        // userJoin(joinRequest)
        // .then(res =>{
        //     alert('회원가입 성공')
        //     history.push('/users/login')
        // })
        // .catch(err =>{
        //     alert(`회원가입 실패 : ${err}`)
        // })

    }

  return (
    <div>
            <h1>회원 가입을 환영합니다</h1>
        <form onSubmit={handleSubmit} method='POST'>
            <ul>
                <li>
                    <label>
                        아이디: <input type="text" id="username" name='username' value={username} onChange = {handleChange}
                         size="10" minlength="4" maxlength="15"/>
                    </label>
                    <small>4~15자리 이내의 영문과 숫자</small>
                </li>
                <li>
                    <label>
                        이메일: <input type="email" id="email" name ='email' value={email} onChange = {handleChange}/>
                    </label>
                </li>
                <li>
                    <label>
                        비밀번호: <input type="password" id="password" name= 'password' value={password} onChange = {handleChange}/>
                    </label>
                </li>
                {/* <li>
                    <label>
                        비밀번호 확인: <input type="password" id="check_pwd"/>
                    </label>
                </li> */}
                <li>
                    <label>
                        이름: <input type="text" id="name" name='name' value={name} onChange = {handleChange}/>
                        {/* <input type="hidden" id="reg_date" name='reg_date' value={} /> */}
                    </label>
                </li>
                <li>
                    <input type="submit" onClick={ e => handleSubmit(e)} value="회원가입"/>
                </li>
            </ul>
        </form>
    </div>
  );
}
