import { Cities } from "../components/Cities"

const getCityCoords = (name) => {
  const cityIndex = Cities.findIndex(city => city.name === name)
  if (cityIndex >= 0) {
    const city = {
      name: name,
      longitude: Cities[cityIndex].longitude,
      latitude: Cities[cityIndex].latitude
    }
    return city
  }
}

export default getCityCoords