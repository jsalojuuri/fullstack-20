import React from 'react'

const Filter = ({ setFilter, setShowAll }) => {
  
    const handleFilterChange = (event) => {     
        if (event.target.value.length > 0) {
            setShowAll(false)
        } else {
            setShowAll(true)
        }
        setFilter(event.target.value)
        }
    
    return (
    <p>filter shown with <input 
            onChange={handleFilterChange}
            />
    </p>



  )
}

export default Filter