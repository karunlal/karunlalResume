import React from 'react'
import Button from '../components/Button.jsx'
import MathsButton from './MathsButton.jsx'
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
  // Split the 'one' array into chunks of numbers with less than 20 digits
  const oneChunks = []
  const chunkSize = 10 // You can adjust the chunk size as needed
  for (let i = 0; i < one.length; i += chunkSize) {
    oneChunks.push(one.slice(i, i + chunkSize))
  }

  const handleClick = () => {
    console.log('hi')
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
    </div>
  )
}

export default MathsPuzzle
