import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from './services/persons'


const Notification = ({ message, messageType }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={messageType}>
      {message}
    </div>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ message, setMessage] = useState(null)
  const [ messageType, setMessageType] = useState(null)

  useEffect(() => {
    personService      
      .getAll()      
      .then(response => {        
        setPersons(response.data)      
      })  
  }, [])

  const personsToShow = showAll    
  ? persons   
  : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageType={messageType} />
      <Filter setFilter={setFilter}
              setShowAll={setShowAll} 
              />
      <h3>Add a new</h3>
      <PersonForm persons={persons} 
                  newName={newName}
                  newNumber={newNumber}
                  setPersons={setPersons}
                  setNewName={setNewName}
                  setNewNumber={setNewNumber}
                  setMessage={setMessage}
                  setMessageType={setMessageType}
      />
      <h3>Numbers</h3>
      {personsToShow.map(person =>
        <Persons  key={person.name} 
                  person={person}
                  persons={persons}
                  setPersons={setPersons}
                  setMessage={setMessage}
                  setMessageType={setMessageType} />
      )}     
    </div>
  )

}

export default App