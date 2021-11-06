import { Logout } from 'features/user'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Navigation = () => {
    return (<>
        <div class="navi">
            <ul style={{backgroundColor : 'A9D1D6', overflow : 'hidden', listStyleType:'none'}}>
                         
                <LI><Link to='/home' style={{ textDecoration:'none' }}>Home</Link></LI>
                {localStorage.length > 0 
                    ? <><LI><Link to='/users/detail' style={{ textDecoration:'none' }}>UserDetail</Link></LI>
                        <LI><Link to='/users/modify' style={{ textDecoration:'none' }}>UserModify</Link></LI>
                        <LI><Link to='/users/remove' style={{ textDecoration:'none' }}>UserRemove</Link></LI>
                        <LI><Link to='/users/list' style={{ textDecoration:'none' }}>UserList</Link></LI>
                        <Ul><LI><Link to='/users/detail' style={{ textDecoration:'none' }}> 안녕 :) {JSON.parse(window.localStorage.getItem('sessionUser')).name} 님</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Logout/></LI> </Ul></>
                    : <><LI><Link to='/users/add' style={{ textDecoration:'none' }}>UserAdd</Link></LI>
                        <LI><Link to='/users/list' style={{ textDecoration:'none' }}>UserList</Link></LI>
                    </> }
                
                {/* <LI><Link to='/users/login' style={{ textDecoration:'none' }}>UserLogin</Link></LI> */}
                {/* {  localStorage.length == 0 
                ?<>
                <LI><button><Link to='/users/add' style={{ textDecoration:'none' }}>회원가입</Link></button></LI>
                <LI><button><Link to='/users/login' style={{ textDecoration:'none' }}>로그인</Link></button></LI>
                </>
                :<><LI><Link to='/users/detail' style={{ textDecoration:'none' }}> 안녕 :) {JSON.parse(window.localStorage.getItem('sessionUser')).name} 님</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Logout/></LI></>} */}

                <br/>

                {/* <LI onClick = {e => window.location.href = `/home`}>Home</LI>
                <LI onClick = {e => window.location.href = `/users/add`} >UserAdd</LI>
                <LI onClick = {e => window.location.href = `/users/detail`}>UserDetail</LI>
                <LI onClick = {e => window.location.href = `/users/list`}>UserList</LI>
                <LI onClick = {e => window.location.href = `/users/login`}>UserLogin </LI>
                <LI onClick = {e => window.location.href = `/users/modify`}>UserModify</LI>
                <LI onClick = {e => window.location.href = `/users/remove`}>UserRemove</LI>
                {  localStorage.length == 0 
                ?<><LI onClick = {e => window.location.href = `/users/add`}>회원가입</LI>
                <LI onClick = {e => window.location.href = `/users/add`}>로그인</LI></>
                :<><LI onClick = {e => window.location.href='/users/detail'}> 안녕 :) "{JSON.parse(window.localStorage.getItem('sessionUser')).name}" 아 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Logout/></LI></>} */}
                
            </ul>
        </div>
</>)
}
export default Navigation

const LI = styled.li`
    float : left;
    background-color:649599;
    padding:8px;
    display:inline-block;
    text-align:center;
    // textAlign:center;
    font-weight:bold;
    // font-size:20px;
    textDecoration: none;
`


const Ul = styled.div`
    background-color : A9D1D6;
    list-style-type : none;
    // margin: 0;
    // padding : 0;
    // overflow : hidden;
    float : right;
`

