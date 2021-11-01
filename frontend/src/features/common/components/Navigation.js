import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation (){
    return (<>
        <div class="navi">
            <ul style={{backgroundColor : 'A9D1D6', overflow : 'hidden', listStyleType:'none'}}>
                
                {/* <li style={{float : 'left'}}><Link to='/home' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>Home</Link></li>
                <li style={{float : 'left'}}><Link to='/users/add' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>UserAdd</Link></li>
                <li style={{float : 'left'}}><Link to='/users/detail' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>UserDetail</Link></li>
                <li style={{float : 'left'}}><Link to='/users/list' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>UserList</Link></li>
                <li style={{float : 'left'}}><Link to='/users/login' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>UserLogin</Link></li>
                <li style={{float : 'left'}}><Link to='/users/modify' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>UserModify</Link></li>
                <li style={{float : 'left'}}><Link to='/users/remove' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>UserRemove</Link></li>
                {  localStorage.length == 0 
                ?<><li style={{float : 'left'}}><Link to='/users/add' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>회원가입</Link></li>
                <li style={{float : 'left'}}><Link to='/users/login' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>로그인</Link></li></>
                :<><li style={{float : 'left'}} onClick = {e => window.location.href='/users/detail'}> 안녕 :) {JSON.parse(window.localStorage.getItem('sessionUser')).name} 아</li></>} */}

                <li style={{float:'left', backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}} onClick = {e => window.location.href = `/home`}>Home</li>
                <li style={{float:'left', backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}} onClick = {e => window.location.href = `/users/add`} >UserAdd</li>
                <li style={{float:'left', backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}} onClick = {e => window.location.href = `/users/detail`}>UserDetail</li>
                <li style={{float:'left', backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}} onClick = {e => window.location.href = `/users/list`}>UserList</li>
                <li style={{float:'left', backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}} onClick = {e => window.location.href = `/users/login`}>UserLogin </li>
                <li style={{float:'left', backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}} onClick = {e => window.location.href = `/users/modify`}>UserModify</li>
                <li style={{float:'left', backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}} onClick = {e => window.location.href = `/users/remove`}>UserRemove</li>
                {  localStorage.length == 0 
                ?<><li style={{float:'left', backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}} onClick = {e => window.location.href = `/users/add`}>회원가입</li>
                <li style={{float:'left', backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}} onClick = {e => window.location.href = `/users/add`}>로그인</li></>
                :<><li style={{float : 'left', backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}} onClick = {e => window.location.href='/users/detail'}> 안녕 :) "{JSON.parse(window.localStorage.getItem('sessionUser')).name}" 아</li></>}
                
            </ul>
        </div>
</>)
}

// const Ul = styled.div`
//     background-color : A9D1D6;
//     list-style-type : none;
//     margin: 0;
//     padding : 0;
//     overflow : hidden;
// `

// const LI = styled.div`
//     float : left;
// `

