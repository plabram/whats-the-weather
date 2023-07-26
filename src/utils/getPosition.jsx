const getPosition = (position, setPosition) => {
  return (
    navigator.geolocation.watchPosition(
      (location) => {

        setPosition({ latitude: location.coords.latitude, longitude: location.coords.longitude })
        console.log("location:", position)
      },
      (error) => {
        console.log("Error: ", error.code, error.message)
        if (error.code === 1) alert("You need to activate location permissions to see the weather in your location.")
      },
      (options) => {
        options.maximumAge = 1800000
      }
    )
  )
}

export default getPosition