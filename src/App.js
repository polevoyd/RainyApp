import React from 'react';
import Titles from './Titles.js';
import Form from './Form.js';
import Weather from './Weather';

import './App.css';
import './config.js';
import { config } from './config.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather = async(event) => {

    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${config.weather_api_key}`)
    const response = await apiCall.json();

    
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ''
    })

    console.log(this.state);
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