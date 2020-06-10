import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../components/login'
import Register from '../components/register'
import Task from '../components/task'

export default function Router (){
    return (
        <BrowserRouter>
          <Route path="/" component={Login} exact/>
          <Route path="/register" component={Register}/>
          <Route path="/task" component={Task}/>
        </BrowserRouter>
    )
}