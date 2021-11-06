import React from 'react';
import { Logout } from 'features/user';
import {Navigation }from 'features/common';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
      <><header style={{paddingBottom:'30px'}}>
        <Navigation/>
        <br/>
        <HR/>
        {localStorage.length > 0 
        ?  <div>
              <Span>{JSON.parse(window.localStorage.getItem('sessionUser')).name}님 접속중 
              <Logout/></Span> 
          </div>
        : <>
            <Span>
                <button style={{margin:'10px'}}><Link to='/users/add' style={{ textDecoration:'none' }}>회원가입</Link></button>
                <button style={{margin:'10px'}}><Link to='/users/login' style={{ textDecoration:'none' }}>로그인</Link></button>            
            </Span>
          </>}
        
      </header>
      </>
    )
  }
const Span = styled.span`
    color: red;
    float: right;
    padding-right: 100px;
    background-color : A9D1D6;
    over-flow : hidden;

`
const HR = styled.hr`
  border: 1px solid black;
  text-align: center;
`
  export default Header