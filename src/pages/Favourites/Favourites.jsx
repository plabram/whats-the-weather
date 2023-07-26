import React, { useState, useEffect } from 'react'
import callAPI from '../../api/call'
import Loading from '../../components/Loading/Loading'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import getCityCoords from '../../utils/getCityCoords'
import { oneDay } from '../../mockData'
import "./Favourites.css"
import Selector from '../../components/Selector/Selector'


const Favourites = ({ cityName, setCityName }) => {

  const [cityWeather, setCityWeather] = useState({})
  const city = getCityCoords(cityName)

  useEffect(() => {
    //setCityWeather(oneDay)
    callAPI(city, setCityWeather, 1)
  }, [cityName])

  return (
    <>
      <Selector cityName={cityName} setCityName={setCityName} />
      {(city === undefined) ?
        <Loading message={"Is it sunny in your favourite city?"} /> :
        <div className='favourites-container'>
          <WeatherCard {...cityWeather} />
        </div>
      }
    </>
  )
}

export default Favourites
Favourites.displayName = "Favourite cities"