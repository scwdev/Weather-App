import React from 'react'



const Forecast = (props) => {

    const api = props.data

    const tempColor = (temp) => {
        if (temp <= 40) {
            return 'blue'
        } else if (temp >= 90) {
            return 'red'
        } else {
            return 'black'
        }
    }

    const forecast = () => {
        return (
            <div>
                <h4 id='city-name'>{api?.name}</h4>
                <h1 id='current-temp' style={{color: tempColor(api?.main.temp)}} >{api?.main.temp}&deg;</h1>
                <h3 id='weather-description' >condition: {api?.weather[0].description}</h3>
                <h3><span>High: </span><span id='max-temp'style={{color: tempColor(api?.main.temp_max)}} >{api?.main.temp_max}&deg;</span></h3>
                <h3><span>Low: </span><span id='min-temp' style={{color: tempColor(api?.main.temp_min)}} >{api?.main.temp_min}&deg;</span></h3>
                <h4>Humidity: {api?.main.humidity}%</h4>
                <h5>Sunrise: {new Date(1000*api?.sys.sunrise).toString().split(' ')[4]}</h5>
                <h5>Sunset: {new Date(1000*api?.sys.sunset).toString().split(' ')[4]}</h5>
            </div>
        )
    }
  
    return (
        <div>{props.data ? forecast() : null}</div>
        
    )
}

export default Forecast