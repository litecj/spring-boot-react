// import axios from 'axios';
import { Layout } from 'features/common';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { UserListForm } from '..';

// import { listPage } from '../reducer/userSlice';

export default function UserList() {
  // const dispatch = useDispatch()
  // // const todo = useSelector((state) => state.todos[props.id])
  // // const users = useSelector(state => state.userReducer.usersState)
  // const users = useSelector(state => state.userReducer.usersState);
  // const type = useSelector(state => state.userReducer.type)
  // const keyword = useSelector( state => state.userReducer.keyword)
  // const page = users.page;

  // useEffect(() => {
  //   const param = {type: type, keyword: keyword, page: page}
  //   dispatch(listPage(param))
  // },[users]);

  // const [list, setList] = useState([])
  // // const SERVER = 'http://localhost:8080'

  // const  userList = () => {
  //     // axios.get(`${SERVER}/users`)
  //     userList()
  //     .then(res => setList(res.data))
  //     .catch(err => console.log(err))
  // }
  // useEffect(() => {
  //   dispatch(listPage())
  // }, [])

  // useEffect(() => {
  //   userList()
  // }, [])

  return (
    <div>
      <Layout>
        
          <Main>
          <h1>User List</h1>
            <UserListForm/>
          </Main>


          {/* <table  border='1px' style={{textAlign:'center'}}>
              <thead>
                      <tr>
                          <th>사용자 번호</th>
                          <th>사용자 아이디</th>
                          <th>사용자 이름</th>
                          <th>사용자 이메일</th>
                      </tr> 
              </thead> 
              <tbody>
                  {users.map((user)=>(
                      <tr>
                          <td>{user.userId}</td>
                          <td>{user.username}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                      </tr>                
                  ))}
              </tbody>
          </table> */}
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