import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Votes = ({votes}) => (
    <div>has {votes} votes</div>
)

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = (props) => {
  
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(6).fill(0))
    const [max, setMax] = useState(0)
  
    const handleNextAnecdote = () => {
        let random = Math.floor(Math.random() * 6)
        setSelected(random)
    }

    const handleVotes = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
        const max = copy.indexOf(Math.max(...copy))
        setMax(max)
 }


  return (
    <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}<br/>
        <Votes votes={votes[selected]} />
        <Button handleClick={handleVotes} text='vote'/>
        <Button handleClick={handleNextAnecdote} text='next anecdote'/>
        <h1>Anecdote with most votes</h1>
        {props.anecdotes[max]}<br/>
        <Votes votes={votes[max]} />
 
    </div>
  )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)