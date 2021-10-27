// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { UserListForm } from '..';

export default function UserList() {
  const [list, setList] = useState([])
  // const SERVER = 'http://localhost:8080'

  const  userList = () => {
      // axios.get(`${SERVER}/users`)
      userList()
      .then(res => setList(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    userList()
  }, [])

  return (
    <div>
        <h1>User List</h1>
        <UserListForm list={list}/>
    </div>
  );
}