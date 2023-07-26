import "./WeatherCard.css"
import React from 'react'

const WeatherCard = (weather) => {

  const { day, title, icon, place, temp, feels, max, min } = weather

  console.log(weather)
  return (
    <div className={
      title === "Clouds" ? "clouds" :
        title === "Clear" ? "clear" :
          title === "Rain" ? "rain" :
            title === "Thunderstorm" ? "thunderstorm" :
              title === "Snow" ? "snow" :
                title === "Mist" ? "mist" :
                  "neutral"

    }
    >
      <div className="weather-elements">
        <h2>{place}</h2>
        <h3>{day}</h3>
        <img src={icon} className="weather-icon"></img>
        <h2>{title}</h2>
        <h3>{temp}º (feels {feels}º)</h3>
        <h4>Min: {min}º - Max: {max}º</h4>
      </div>
    </div >
  )
}

export default WeatherCard