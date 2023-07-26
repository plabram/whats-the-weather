import Loading from '../../components/Loading/Loading'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import React, { useState, useEffect } from "react"
import callAPI from "../../api/call"
import "./Home.css"
import { oneDay } from '../../mockData'

const Home = ({ position }) => {
  const [weather, setWeather] = useState({})
  const icon = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`

  useEffect(() => {
    //setWeather(oneDay)
    callAPI(position, setWeather, 1)
  }, [position])


  return (
    <div className="home">
      {(position === undefined) ?
        <Loading message={"Getting your weather from the cloud(s)..."} /> :
        <div className='one-day-container'>
          <WeatherCard {...weather} />
        </div>}
    </div>
  )
}

export default Home

Home.displayName = "Home page"