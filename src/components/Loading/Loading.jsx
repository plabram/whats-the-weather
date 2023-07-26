import React from 'react'

const Loading = ({ message }) => {
  return (
    <div className="loading">
      <h2>{message}</h2>
      <img src="/clouds_icon.png" />
    </div>
  )
}

export default Loading