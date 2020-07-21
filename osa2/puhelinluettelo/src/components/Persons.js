import React from 'react'
import personService from '../services/persons'

const Persons = ({ person, persons, setPersons, setMessage, setMessageType }) => {
  
  const handleClick = (event, person) => {
    console.log('delete button clicked')
    event.preventDefault()
  
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
      .del(person.id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== response.id))
        console.log('person deleted')
        setMessageType('success')
        setMessage(`${person.name} deleted successfully`)
        setTimeout(() => {          
          setMessage(null) 
          window.location.reload(false)     
        }, 3000)
        
        
      })
      .catch(error => {      
        setMessageType('error')
        setMessage(          
          `Information of '${person.name}' has already been removed from server`        
        )        
        setTimeout(() => {          
          setMessage(null)
          window.location.reload(false)          
        }, 3000)
   
        
        setPersons(persons)    
      }) 


    }
    
  }
  
  return (
    <div>
        <p>
          {person.name} {person.number} <button onClick={(event) => handleClick(event, person)}>delete</button>
        </p>
    </div>
  )
}

export default Persons