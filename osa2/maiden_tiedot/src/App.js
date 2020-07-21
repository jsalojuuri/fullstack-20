import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import Filter from './components/Filter'

function App() {
  
  const [ countries, setCountries] = useState([])
  const [ filter, setFilter ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ weather, setWeather] = useState([])
  const [ weatherCapital, setWeatherCapital] = useState('Helsinki')

  const restcountries = () => {
    console.log('restcountries: effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('restcountries: promise fulfilled')
        setCountries(response.data)
        console.log(response)
        console.log(response.data)
      })
  }
  
  useEffect(restcountries, [])   

  const api_key = process.env.REACT_APP_API_KEY

  const weatherstack = () => {
  console.log('weatherstack: effect')
  axios
    .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${weatherCapital}`)
    .then(response => {
      console.log('weatherstack: promise fulfilled')
      setWeather(response.data)
      console.log(response)
      console.log(response.data)
  })
  }
  
  useEffect(weatherstack, [weatherCapital])

  const handleClick = (event, country) => {
    event.preventDefault()
    setWeatherCapital(country.capital)
    setFilter(country.name)
    console.log('Clicked button ', country.name, ', which capital is ', country.capital)
  }
            

  const countriesToShow = filter => {
    const cnts = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    if (showAll || cnts.length > 10) {
      return <p>Too many matches, specify another filter</p>
    } else if ((cnts.length > 1) & (cnts.length < 11)) {
      return cnts.map(country => 
          <div key={country.name}>
            {country.name} <button type="submit" onClick={(event) => handleClick(event, country)}>show</button>
          </div>
          )
      } else {
        return cnts.map(country => <Country key={country.name} country={country} weather={weather} />)
      }
  }   

  return (
    <div>
      <Filter setFilter={setFilter}
              setShowAll={setShowAll}
              setWeatherCapital={setWeatherCapital}
              countries={countries}
        />
      {countriesToShow(filter)}

    </div>
  );
}

export default App;
