// import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinPage } from 'features/user/reducer/userSlice'
import { useForm } from "react-hook-form";

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
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
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

      const handleClick = async (e) => {
        e.preventDefault()      // 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드  
                                // 이 페이지에 없어서, 작동하지 않도록 하지 않고, 'dispatch(joinPage(json))'으로 찾아서 작동할 수 있도록 함을 의도
        e.stopPropagation()     // 이벤트가 상위 DOM으로 전달,전파를 하지 않도록 하는 코드 / 이벤트 전파를 막아 주지만 기본 이벤트를 막아주진 않음
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
            <h1>WELLCOME</h1>
        <form onSubmit={handleSubmit} method='POST' style={{margin:'20px'}}>
            <h1>JOIN</h1>
            <ul>
                <li>
                    <label>
                        아이디: <input type="text" id="username" aria-invalid={errors.name ? "true" : "false"}
                        {...register('name', { required: true, maxLength: 30 })} name='username' value={username} onChange = {handleChange}
                         size="10" minlength="4" maxlength="15"/>
                        {errors.name && errors.name.type === "required" && (<span role="alert">This is required</span>)}
                        {errors.name && errors.name.type === "maxLength" && (<span role="alert">Max length exceeded</span>)}
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
                    <input type="submit" onClick={ e => handleClick(e)} value="회원가입"/>
                </li>
            </ul>
        </form>
    </div>
  );
}
