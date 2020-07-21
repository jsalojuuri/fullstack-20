import React from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, newName, newNumber, setPersons, setNewName, setNewNumber, setMessage, setMessageType }) => {
  
  const addPerson = (event) => {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber
      }
    
      if (persons.map(person => person.name).includes(newName)) {       
        if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
 
          const updateId = persons.filter(person => person.name === newName).map(person => person.id)
          console.log(` id to be updated: ${updateId}`)

          personService
          .update(updateId, personObject)
          .then(response => {
            setPersons(persons.map(person => person.id !== updateId ? person : response.data))
            setNewName('')
            setNewNumber('')
            setMessageType('success')
            setMessage(`${newName} updated successfully`)
            setTimeout(() => {          
              setMessage(null) 
              window.location.reload(false)     
            }, 3000)
            console.log(`existing person with id ${updateId} updated`)
          })

        }      
     } else {
        personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          setMessageType('success')
          setMessage(`${newName} created successfully`)
          setTimeout(() => {          
            setMessage(null) 
            window.location.reload(false)     
          }, 3000)
        })
        console.log('new person added')
     }
    }
    
  const handleNameChange = (event) => {     
        setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {       
    setNewNumber(event.target.value)  
  }  

  return (
  <form onSubmit={addPerson}>
    <div>
      name: <input 
      value={newName} 
      onChange={handleNameChange}
      />
    </div>
    <div>
      number <input 
      value={newNumber} 
      onChange={handleNumberChange}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
  )
}

export default PersonForm