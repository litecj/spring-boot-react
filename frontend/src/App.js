import React from 'react';
import { Navigation, Home } from 'features/common'
import { UserAdd, UserDetail, UserList, UserLogin, UserModify, UserRemove} from 'features/user'
import { Route, Redirect, Switch } from 'react-router-dom'

export default function App() {
  return (<>
  <Navigation/>
    <Switch>
      <Route exact path='/' component = { Home }/>
      <Redirect from='/home' to = { '/' }/>

      <Route exact path='/userAdd' component= { UserAdd }/>
      <Route exact path='/userDetail' component= { UserDetail }/>
      <Route exact path='/userList' component= { UserList }/>
      <Route exact path='/userLogin' component= { UserLogin }/>
      <Route exact path='/userModify' component= { UserModify }/>
      <Route exact path='/userRemove' component= { UserRemove }/>
    </Switch>
  </>);
}