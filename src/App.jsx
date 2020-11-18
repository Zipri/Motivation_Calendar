import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link,
        Redirect, useHistory, useLocation} from "react-router-dom";

import CalendarPage from './pages/calendarPage'
import {AuthButton, PrivateRoute, ProvideAuth} from "./fakeAuth";
import ToDoListPage from "./pages/toDoPage";
import LoginPage from "./pages/loginPage";

class App extends React.Component {
  render() {
    return (
        <ProvideAuth>
          <Router>
            <div>
              <AuthButton />

              <ul>
                <li>
                  <Link to="/Calendar">Motivation Calendar</Link>
                </li>
                <li>
                  <Link to="/ToDo">Motivation ToDo list</Link>
                </li>
              </ul>

              <Switch>
                <Route path="/Calendar">
                  <CalendarPage />
                </Route>
                <Route path="/LogIn">
                  <LoginPage />
                </Route>
                <PrivateRoute path="/ToDo">
                  <ToDoListPage />
                </PrivateRoute>
              </Switch>

            </div>
          </Router>
        </ProvideAuth>
    );
  }
}

export default App;
