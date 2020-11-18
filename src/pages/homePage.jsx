import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {AuthButton, PrivateRoute, ProvideAuth} from "../fakeAuth";
import CalendarPage from "./calendarPage";
import LoginPage from "./loginPage";
import ToDoListPage from "./toDoPage";
import "./homePage.css"
import {openNav, closeNav} from "./homePage.js"

export default class HomePage extends React.Component {
    render() {
        return (
            <ProvideAuth>
                <Router>
                    <div>
                        <AuthButton />
                        <button onClick={() => openNav()} className="openbtn">open</button>
                        <div id="mySidenav" className="sidenav">
                            <ul>
                                <li>
                                    <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
                                </li>
                                <li>
                                    <a className="active" href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/calendar">Motivation Calendar</a>
                                </li>
                                <li>
                                    <a href="/todo">To-Do List</a>
                                </li>
                            </ul>
                        </div>


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