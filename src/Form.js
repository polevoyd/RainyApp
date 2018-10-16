import React from 'react';

const Form = (props) => {

    return (
        <form onSubmit={props.loadWeather}>
            <input type="text" name="city" placeholder="city"/>
            <input type="text" name="country" placeholder="country"/>
            <button>Get Weather</button>
        </form>
    );
}

export default Form;