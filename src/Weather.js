import React from 'react';

const Weather = (props) => {

    if (props.weatherData.error) {

        return (
            <div>
                <p>{props.weatherData.error}</p>
            </div>
        );
    } else {
        return (
            <div>
                {props.weatherData.country && props.weatherData.city && <p>Location: {props.weatherData.city},    {props.weatherData.country}</p>}
                {props.weatherData.temperature && <p>Temperature: {props.weatherData.temperature}</p>}
                {props.weatherData.humidity && <p>Humidity: {props.weatherData.humidity}</p>}
                {props.weatherData.description && <p>Conditions:  {props.weatherData.description}</p>}
                {props.weatherData.error && <p>{props.weatherData.error}</p>}
            </div>
        );
    }
    
}

export default Weather;