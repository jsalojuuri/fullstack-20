import React from 'react'

const Filter = ({ setFilter, setShowAll, setWeatherCapital, countries }) => {
  
    const handleFilterChange = (event) => {     
        const filter = event.target.value
        const cnts = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
        if (event.target.value.length > 0) {
            setShowAll(false)
        } else {
            setShowAll(true)
        }
        setFilter(filter)
        
        if (cnts.length === 1) {
            setWeatherCapital(cnts[0].capital)
            console.log('Only one country left after filtering...', cnts[0].name)
        }
        
        }
    
    return (
    <p>find countries <input 
            onChange={handleFilterChange}
            />
    </p>



  )
}

export default Filter