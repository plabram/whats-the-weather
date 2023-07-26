import { Cities } from '../Cities'
import "./Selector.css"

const Selector = ({ cityName, setCityName }) => {
  return (
    <div className="selector">
      <select name="cities" id="cities" onChange={(e) => setCityName(e.target.value)}>
        <option value="">Choose a city</option>
        {Cities.map((city, index) => (
          <option key={index} value={city.name}>{city.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Selector