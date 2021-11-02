// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserListForm } from '..';
import { listPage } from '../reducer/userSlice';

export default function UserList() {
  const dispatch = useDispatch()
  // const todo = useSelector((state) => state.todos[props.id])
  const [list, setList] = useState([])
  // const SERVER = 'http://localhost:8080'

  const  userList = () => {
      // axios.get(`${SERVER}/users`)
      userList()
      .then(res => setList(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    dispatch(listPage())
  }, [])

  // useEffect(() => {
  //   userList()
  // }, [])

  return (
    <div>
        <h1>User List</h1>
        <UserListForm list={list}/>
    </div>
  );
}