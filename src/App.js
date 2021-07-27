import React, {useState, useEffect} from 'react'

import Forecast from './Components/Forcast'
import SearchForm from './Components/SearchForm'

import './App.css';



function App() {
  const [weather, setWeather] = useState(null)
  const apiKey = 'f054411b9429491aff936bbcb29b69fd'

  const getWeather = async (zipCode) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`)
    const data = await response.json()
    setWeather(data)
    // var sunrise = getTime(data.sys.sunrise)
    // var sunset = getTime(data.sys.sunset)
  }

  // const getTime = (ms) => {
  //   let longDate = new Date(ms*1000)
  //   let time = longDate.toString().split(' ')[4]
  //   return time
  // }
  

  return (
    <div className="App">
      <SearchForm getWeather={getWeather} />
      <Forecast data={weather} />
    </div>
  );
}

export default App;
