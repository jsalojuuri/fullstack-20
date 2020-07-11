import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (  <button onClick={handleClick}>    {text}  </button>)

const Statistics = ({stats}) => {
  if (stats[3] === 0) return <p>No feedback given</p>
  
  return (
  <div>
    <table>  
      <tbody>      
        <StatisticLine text='good' value={stats[0]} />
        <StatisticLine text='neutral' value={stats[1]} />
        <StatisticLine text='bad' value={stats[2]} />
        <StatisticLine text='all' value={stats[3]} />
        <StatisticLine text='average' value={stats[4]} />
        <StatisticLine text='positive' value={stats[5]} />
      </tbody>
    </table>
  </div>
  )
}

const StatisticLine = ({text, value}) => {
  
  return (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // click handlers
  const goodClick = () => setGood(good+1)  
  const neutralClick = () => setNeutral(neutral+1)
  const badClick = () => setBad(bad+1)

  // summary stats
  const all = () => good+neutral+bad
  const average = () => (good-bad)/all()
  const positive = () => {
    const pos = good/all()*100
    return `${pos} %`
  }

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={goodClick} text='good' />
      <Button handleClick={neutralClick} text='neutral' />
      <Button handleClick={badClick} text='bad' />
      <Header text='statistics' />
      <Statistics stats={[good, neutral, bad, all(), average(), positive()]} />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)