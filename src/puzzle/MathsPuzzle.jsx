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
  const handleClick = (buttonLabel, firstNum) => {
    console.log(buttonLabel, firstNum)
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
          <MathsButton
            yesLabel="YES"
            noLabel="NO"
            onClick={(label) => handleClick(label, boxNum[0])}
          />
        </div>
      ))}

      <div className="fixed flex flex-wrap justify-center bottom-3 inset-x-0 px-2">
        <button
          className="outline-noe px-4 py-1 rounded-full shadow-lg text-white bg-purple-600"
          onClick={handleReset}
        >
          RESET
        </button>
      </div>
    </div>
  )
}

export default MathsPuzzle
