import React from 'react'
import { Link } from 'react-router-dom'


export default function Navigation (){
    return (<>
        <div class="navi">
            <ul style={{backgroundColor : 'A9D1D6', overflow : 'hidden', listStyleType:'none'}}>
                <li style={{float : 'left'}}><Link to='/home' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>Home</Link></li>
                <li style={{float : 'left'}}><Link to='/users/add' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>UserAdd</Link></li>
                <li style={{float : 'left'}}><Link to='/users/detail' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>UserDetail</Link></li>
                <li style={{float : 'left'}}><Link to='/users/list' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>UserList</Link></li>
                <li style={{float : 'left'}}><Link to='/users/login' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>UserLogin</Link></li>
                <li style={{float : 'left'}}><Link to='/users/modify' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>UserModify</Link></li>
                <li style={{float : 'left'}}><Link to='/users/remove' style={{backgroundColor:'649599', padding:'8px', textAlign:'center', fontWeight:'bold'}}>UserRemove</Link></li>

              
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

