import React from 'react'

const Country = ({ country, weather }) => {

    return (
   
    <div>
        <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
        <h3>languages</h3>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
        <img src={country.flag} alt='country flag' width='150' height='100' />
    <h3>Weather in {country.capital}</h3>
        <p><b>temperature:</b> {weather.current.temperature} Celcius</p>
        <img src={weather.current.weather_icons[0]} alt='capital weather' width='100' height='100' />
        <p><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
    </div>



  )
}

export default Country