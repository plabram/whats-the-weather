import React, { useState, useEffect } from 'react'
import Loading from '../../components/Loading/Loading'
import callAPI from '../../api/call'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import "./FiveDay.css"
import { fiveDays } from '../../mockData'

const FiveDay = ({ position }) => {
  const [fiveDayWeather, setFiveDayWeather] = useState([{}, {}, {}, {}, {}])

  useEffect(() => {
    //setFiveDayWeather(fiveDays)
    callAPI(position, setFiveDayWeather, 5)
  }, [position])


  return (
    <div className="home">
      {
        (position === undefined) ?
          <Loading message={"Getting your weather from the cloud(s)..."} /> :
          <div className="five-days-container">
            <WeatherCard {...fiveDayWeather[0]} />
            <WeatherCard {...fiveDayWeather[1]} />
            <WeatherCard {...fiveDayWeather[2]} />
            <WeatherCard {...fiveDayWeather[3]} />
            <WeatherCard {...fiveDayWeather[4]} />
          </div>
      }
    </div>
  )
}

export default FiveDay
FiveDay.displayName = "Five day weather for your location"