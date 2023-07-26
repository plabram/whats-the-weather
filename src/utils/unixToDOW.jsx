const unixToDOW = (timestamp) => {
  const date = new Date(timestamp * 1000)
  const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' })
  return dayOfWeek
}

export default unixToDOW