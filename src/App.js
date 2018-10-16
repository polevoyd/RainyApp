import React from 'react';
import Titles from './Titles.js';
import Form from './Form.js';
import Weather from './Weather';

import './App.css';
import './config.js';
import { config } from './config.js';

class App extends React.Component {

  getWeather = async() => {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${config.weather_api_key}`)
  
    const response = await apiCall.json();

    console.log(response);
  }
  render() {

    return (
      <div>
        <Titles />
        <Form handleClick={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;