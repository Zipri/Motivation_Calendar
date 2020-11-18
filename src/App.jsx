import React from 'react'

import Calendar from './components/calendar'

class App extends React.Component {
  state = {
      selectedDate: null
  }
  handleDateChange = selectedDate => this.setState({ selectedDate });

  render() {
    const { selectedDate } = this.state;

    return (
        <div>
            {selectedDate && <pt>Выбранная дата: {selectedDate.toLocaleDateString()} </pt>}
            <pt>Сегодняшняя дата: {new Date().toLocaleDateString()} </pt>

            <Calendar
                onChange = {this.handleDateChange}
            />
        </div>
    );
  }
}

export default App;
