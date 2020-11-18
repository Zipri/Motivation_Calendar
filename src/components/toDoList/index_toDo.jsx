import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ToDoList extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Motivation ToDo list 4 u</h1>
                </header>

                <div>
                    <input type="checkbox" checked/>
                    <textarea>Не скопипастить ToDo лист Кости</textarea>
                </div>
                <div>
                    <input type="checkbox"/>
                    <textarea>Понять, где тут нужен бэк..</textarea>
                </div>
                <div>
                    <input type="checkbox" />
                    <textarea>Понять РИП</textarea>
                </div>
                <div>
                    <input type="checkbox" checked/>
                    <textarea>Сдать рк по РИП</textarea>
                </div>

            </div>
        )
    }
}