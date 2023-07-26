import unixToDOW from "../utils/unixToDOW"
import { API_KEY } from "./key"

const callAPI = (position, weatherSetter, days) => {

  const WEATHER_URL = "https://api.openweathermap.org"
  const selectedIndexes = [0, 7, 15, 23, 31];

  if (days === 1) {
    return (
      (async () => {
        const data = await fetch(`${WEATHER_URL}/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${API_KEY}&units=metric`)
          .then(
            (response) => response.json()
          )
        console.log("If you're API and you know it clap your hands")
        weatherSetter({
          title: data.weather[0].main,
          place: data.name,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          temp: data.main.temp,
          feels: data.main.feels_like,
          max: data.main.temp_max,
          min: data.main.temp_min,
        })
      })()
    )
  } else {
    return (
      (async () => {
        const data = await fetch(`${WEATHER_URL}/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&appid=${API_KEY}&units=metric`)
          .then(
            (response) => response.json()
          )
        console.log("If you're API and you know it clap your hands")
        console.log(data)
        weatherSetter(
          selectedIndexes.map(index => ({
            day: unixToDOW(data.list[index].dt),
            title: data.list[index].weather[0].main,
            icon: `https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}@2x.png`,
            place: data.city.name,
            temp: data.list[index].main.temp,
            feels: data.list[index].main.feels_like,
            max: data.list[index].main.temp_max,
            min: data.list[index].main.temp_min,
          }))

        )


      })()
    )
  }
}

export default callAPI


