// import axios from 'axios';
import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinPage } from 'features/user/reducer/userSlice'
import { useForm } from "react-hook-form";
import styled from 'styled-components'

// import { useSelector, useDispatch } from 'react-reㄴdux';
// import {
//   decrement,
//   increment,
//   incrementByAmount,
//   incrementAsync,
//   incrementIfOdd,
//   selectCount,
// } from './counterSlice';
// import styles from './Counter.module.css';

// 객체는 기능과 속성의 집합
// hook 함수 : 리액트 컴퍼넌트 안에 객체를 만든다.
export default function UserAdd() {
    // const history = useHistory()  // react-router-dom 제공하는 경로 이동 (app.js)에 지정되어 있는 경로  // useHistory() : hook 함수   // history
    // const SERVER = 'http://localhost:8080'
    const dispatch = useDispatch()      // 
    // const [join, setJoin] = useState({
    //     username:'', password:'', email:'', name:'', regDate: new Date().toLocaleDateString()
    // })
        // [join, setJoin] = ls     // 구조분해 할당 []  -> 바로 사용
    // const {username, password, email, name} = join          // 구조분해 할당 {}
    const { register, handleSubmit, formState: { errors } } = useForm();
        // https://react-hook-form.com/kr/advanced-usage/
        // const onSubmit = data => console.log(data);
    // const handleChange = useCallback(           // 리덕스 영역 사용
    //     e => {
    //         const { value, name } = e.target
    //         setJoin({
    //             ...join,
    //             [name] : value
    //         })
    //     }, [join]
    // ) 
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

      const onSubmit = async (data) => {
        // e.preventDefault()      // 기본으로 정의된 이벤트를 작동하지 못하게 하는 메서드  
        //                         // 이 페이지에 없어서, 작동하지 않도록 하지 않고, 'dispatch(joinPage(json))'으로 찾아서 작동할 수 있도록 함을 의도
        // e.stopPropagation()     // 이벤트가 상위 DOM으로 전달,전파를 하지 않도록 하는 코드 / 이벤트 전파를 막아 주지만 기본 이벤트를 막아주진 않음
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

        // const json = {
        //     'username': join.username,
        //     'password': join.password,
        //     'email': join.email,
        //     'name': join.name,
        //     'regDate': join.regDate
        // }
        // alert(`회원가입 정보: ${JSON.stringify(json)}`)
        // await dispatch(joinPage(data))  // dispatch의 함수로써 실행
        // alert(`${join.username} 회원가입 환영`)
        // history.push('/users/login')    // 'history' 객체(SJON)의 'push'메소드로써 실행
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
            <h1 style={{marginLeft:'20px'}}>WELLCOME</h1>
        <form onSubmit={handleSubmit(async ({...data}) => {await dispatch(joinPage({...data,  regDate: new Date().toLocaleDateString()}))})} method='POST' style={{margin:'20px'}}>
            <h1>JOIN</h1>
            <ul>
                <li>
                    <label>
                         {/* use aria-invalid to indicate field contain error */}
                        아이디: 
                        <input type="text" id="username" aria-invalid={errors.username ? "true" : "false"}
                            {...register('username', { required: true, maxLength: 30 })}size="10" minlength="4"/>  
                        {/* <input type="text" id="username" aria-invalid={errors.username ? "true" : "false"}
                            {...register('username', { required: true, maxLength: 30 })} name='username' value={username} onChange = {handleChange} size="10" minlength="4"/>   */}
                    </label>
                    <small>4~15자리 이내의 영문과 숫자</small>
                </li>
                <li style={{listStyleType:"none"}}>
                    <small>
                            {errors.username && errors.username.type === "required" && (<Span role="alert">This is required</Span>)}
                            {errors.username && errors.username.type === "maxLength" && (<Span role="alert">Max length exceeded</Span>)}
                    </small>
                </li>
                <li>
                    <label>
                        이메일: <input type="email" id="email" aria-invalid={errors.email ? "true" : "false"} {...register('email', { required: true, maxLength: 30 })}/>
                    </label>
                </li>
                <li style={{listStyleType:"none"}}>
                    <small>
                            {errors.email && errors.email.type === "required" && (<Span role="alert">This is required</Span>)}
                            {errors.email && errors.email.type === "maxLength" && (<Span role="alert">Max length exceeded</Span>)}
                    </small>
                </li>
                <li>
                    <label>
                        비밀번호: <input type="password" id="password" aria-invalid={errors.password ? "true" : "false"}{...register('password', { required: true, maxLength: 30 })}/>
                    </label>
                </li>
                <li style={{listStyleType:"none"}}>
                    <small>
                            {errors.password && errors.password.type === "required" && (<Span role="alert">This is required</Span>)}
                            {errors.password && errors.password.type === "maxLength" && (<Span role="alert">Max length exceeded</Span>)}
                    </small>
                </li>
                {/* <li>
                    <label>
                        비밀번호 확인: <input type="password" id="check_pwd"/>
                    </label>
                </li> */}
                <li>
                    <label>
                        이름: <input type="text" id="name" aria-invalid={errors.name ? "true" : "false"}{...register('name', { required: true, maxLength: 30 })}/>
                        {/* <input type="hidden" id="reg_date" name='reg_date' value={} /> */}
                    </label>
                </li>
                <li style={{listStyleType:"none"}}>
                    <small>
                            {errors.name && errors.name.type === "required" && (<Span role="alert">This is required</Span>)}
                            {errors.name && errors.name.type === "maxLength" && (<Span role="alert">Max length exceeded</Span>)}
                    </small>
                </li>
                <br/>
              
                <li style={{listStyleType:'none'}}>   
                    {/* <input type="submit" onClick={ e => onSubmit(e)} value="회원가입"/> */}
                    <input type="submit" value="회원가입"/>
                </li>
            </ul>
        </form>
    </div>
  );
}


// import styled from 'styled-components'


const Span = styled.span`
    color: red;
    font-weight: bold;
`