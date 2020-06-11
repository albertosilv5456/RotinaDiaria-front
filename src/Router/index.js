import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Login from '../components/login'
import Register from '../components/register'
import Task from '../components/taskPag'

export default function Router (){
    return (
        <BrowserRouter>
          <Route path="/" component={Login} exact/>
          <Route path="/register" component={Register}/>
          <Route path="/task" component={Task}/>
        </BrowserRouter>
    )
}