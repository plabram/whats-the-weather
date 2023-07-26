import './App.css'
import { Link, Routes, Route } from 'react-router-dom'
import React, { lazy, useState } from 'react'
import getPosition from '../src/utils/getPosition'

const Home = lazy(() => import('./pages/Home/Home'))
const FiveDay = lazy(() => import('./pages/FiveDay/FiveDay'))
const Favourites = lazy(() => import('./pages/Favourites/Favourites'))
const FavouritesFiveDay = lazy(() => import('./pages/FavouritesFiveDay/FavouritesFiveDay'))

function App() {

  const [position, setPosition] = useState()
  getPosition(position, setPosition)

  const [cityName, setCityName] = useState("")

  return (
    <>
      <header>
        <h1>The Weather App</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/five-day">Next 5 Days</Link>
          <Link to="/favourites">Favourites</Link>
          <Link to="/favourites-five-day">Next 5 Days (Favourites)</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<h2>Loading...</h2>}>
            <Home position={position} />
          </React.Suspense>
        } />
        <Route path="/five-day" element={
          <React.Suspense fallback={<h2>Loading...</h2>}>
            <FiveDay position={position} />
          </React.Suspense>
        } />
        <Route path="/favourites" element={
          <React.Suspense fallback={<h2>Loading...</h2>}>
            <Favourites cityName={cityName} setCityName={setCityName} />
          </React.Suspense>
        } />
        <Route path="/favourites-five-day" element={
          <React.Suspense fallback={<h2>Loading...</h2>}>
            <FavouritesFiveDay cityName={cityName} setCityName={setCityName} />
          </React.Suspense>
        } />
      </Routes>
      <footer>
        <p>Made by Penelope with love 💜</p>
        <p>All data and icons © OpenWeather</p>
      </footer>
    </>
  )
}

export default App