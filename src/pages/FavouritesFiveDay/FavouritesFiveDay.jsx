import React, { useState, useEffect } from 'react'
import Loading from '../../components/Loading/Loading'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import getCityCoords from '../../utils/getCityCoords'
import callAPI from '../../api/call'
import "./FavouritesFiveDay.css"
import { fiveDays } from '../../mockData'
import Selector from '../../components/Selector/Selector'


const FavouritesFiveDay = ({ cityName, setCityName }) => {

  const [fiveDayCityWeather, setFiveDayCityWeather] = useState([{}, {}, {}, {}, {}])
  const city = getCityCoords(cityName)


  useEffect(() => {
    //setFiveDayCityWeather(fiveDays)
    callAPI(city, setFiveDayCityWeather, 5)
  }, [cityName])

  return (
    <>
      <Selector cityName={cityName} setCityName={setCityName} />
      {(city === undefined) ?
        <Loading message={"What's the weather in your favourite city?"} /> :
        <div className='five-day-favourites-container'>
          <WeatherCard {...fiveDayCityWeather[0]} />
          <WeatherCard {...fiveDayCityWeather[1]} />
          <WeatherCard {...fiveDayCityWeather[2]} />
          <WeatherCard {...fiveDayCityWeather[3]} />
          <WeatherCard {...fiveDayCityWeather[4]} />

        </div >
      }
    </>
  )
}

export default FavouritesFiveDay