import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link,
        Redirect, useHistory, useLocation} from "react-router-dom";

import CalendarPage from './components/pages/calendarPage'
import {AuthButton, ProvideAuth} from "./fakeAuth";

class App extends React.Component {
  render() {
    return (
        <ProvideAuth>
          <Router>
            <div>
              <AuthButton />

              <ul>
                <li>
                  <Link to="/m_calendar">Motivation Calendar</Link>
                </li>
              </ul>

              <Switch>
                <Route path="/m_calendar">
                  <CalendarPage />
                </Route>
              </Switch>

            </div>
          </Router>
        </ProvideAuth>
    );
  }
}

export default App;
