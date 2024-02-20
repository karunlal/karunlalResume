import React from 'react'
import Button from '../components/Button.jsx'
import MathsButton from './MathsButton.jsx'
import { useState } from 'react'
import {
  one,
  two,
  fourth,
  eighth,
  sixteenth,
  thirtytwoth,
  sixtyforth,
} from '../components/Data.jsx'

const MathsPuzzle = () => {
  const [box, setBox] = useState([
    one,
    two,
    fourth,
    eighth,
    sixteenth,
    thirtytwoth,
    sixtyforth,
  ])
  const [boxNum, setBoxNum] = useState(0)
  const handleClick = () => {
    console.log()
    {
      if (boxNum < 6) setBoxNum(boxNum + 1)
    }
  }
  const handleReset = () => {
    setBoxNum(0)
  }

  // Split the 'one' array into chunks of numbers with less than 20 digits
  const oneChunks = []
  const chunkSize = 10 // You can adjust the chunk size as needed
  for (let i = 0; i < box[boxNum].length; i += chunkSize) {
    oneChunks.push(box[boxNum].slice(i, i + chunkSize))
  }

  return (
    <div>
      {oneChunks.map((chunk, index) => (
        <div key={index} className="px-10">
          {chunk.map((num, idx) => (
            <button
              className="px-5 py-6 font-bold font-serif text-4xl"
              key={idx}
            >
              {num}
            </button>
          ))}
        </div>
      ))}
      <MathsButton yesLabel="YES" noLabel="NO" onClick={handleClick} />
      <button onClick={handleReset}>RESET</button>
    </div>
  )
}

export default MathsPuzzle
