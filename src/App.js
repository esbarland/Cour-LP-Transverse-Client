import './style/App.css';
import { Switch, Route } from "react-router-dom";
import React, { Component } from 'react';

import HomePage from "./components/basic/HomePage";
import TaskDetail from "./components/task/TaskDetail";
import TaskList from "./components/task/TaskList";

class App extends Component {
  render (){
    return (
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/task">
          <TaskList />
        </Route>
        <Route path="/task/:id">
          <TaskDetail />
        </Route>
      </Switch>
    );
  }
}

export default App;
