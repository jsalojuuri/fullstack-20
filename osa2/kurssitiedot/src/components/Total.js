import React from 'react'

const Total = ({parts}) => {

const exercises = parts.map(part => part.exercises)

return (
    <div>
    <p><b>total of {exercises.reduce((s,p) => s+p)} exercises</b></p>
    </div>
    )
}

export default Total