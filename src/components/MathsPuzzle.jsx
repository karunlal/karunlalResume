import React from 'react'
import Button from './Button.jsx'
import {
  one,
  two,
  fourth,
  eighth,
  sixteenth,
  thirtytwoth,
  sixtyforth,
} from './Data.jsx'

const MathsPuzzle = () => {
  // Split the 'one' array into chunks of numbers with less than 20 digits
  const oneChunks = []
  const chunkSize = 10 // You can adjust the chunk size as needed
  for (let i = 0; i < one.length; i += chunkSize) {
    oneChunks.push(one.slice(i, i + chunkSize))
  }

  return (
    <div>
      {oneChunks.map((chunk, index) => (
        <div key={index}>
          {chunk.map((num, idx) => (
            <Button key={idx}>{num}</Button>
          ))}
        </div>
      ))}
      <div>
        <button className="text-left">YES</button>
        <button className="text-right">NO</button>
      </div>
    </div>
  )
}

export default MathsPuzzle
