import React from 'react'
import MainCode from './MainCode'

const MathsPuzzle = () => {
  return (
    <div>
      <h1>
        Welcome to maths puzzle... Let's play a quick game. Imagine a number
        between 1 and 100. Press continue button
      </h1>
      <button>Continue</button>
      <main>
        <MainCode />
      </main>
    </div>
  )
}

export default MathsPuzzle
