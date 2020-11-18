import React from "react";
import Calendar from "../calendar";

export default class CalendarPage extends React.Component {
    state = {
        selectedDate: null
    }

    handleDateChange = selectedDate => this.setState({ selectedDate });

    render() {
        const { selectedDate } = this.state;

        return (
            <div>
                <div className="row">
                    <div>
                        <Calendar
                            onChange = {this.handleDateChange}
                        />
                        <Calendar
                            onChange = {this.handleDateChange}
                        />
                    </div>
                    <div className="col align-self-center">
                        {selectedDate && <pt>Выбранная дата: {selectedDate.toLocaleDateString()} </pt>}
                        <pt>Сегодняшняя дата: {new Date().toLocaleDateString()} </pt>
                        <Calendar
                            onChange = {this.handleDateChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}