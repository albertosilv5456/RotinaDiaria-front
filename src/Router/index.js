import React from "react";
import {
  BrowserRouter,
} from "react-router-dom";
import Login from '../components/login'
import Register from '../components/register'
import Task from '../components/taskPag'
import Route from './wrapper'
export default function Router (){
    return (
        <BrowserRouter>
          <Route path="/" component={Login} exact redirectTo="/task"/>
          <Route path="/register" component={Register}redirectTo="/task"/>
          <Route path="/task" component={Task} isPrivate={true} redirectTo="/"/>
        </BrowserRouter>
    )
}