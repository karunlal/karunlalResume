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

const MainCode = () => {
  const box = [one, two, fourth, eighth, sixteenth, thirtytwoth, sixtyforth]
  const [boxNum, setBoxNum] = useState(0)
  const [countBox, setCountBox] = useState(0)
  const [count, setCount] = useState(0)

  const handleClick = (buttonLabel, firstNum) => {
    setCount(count + 1)
    console.log(buttonLabel, firstNum)

    if (boxNum < 6) setBoxNum(boxNum + 1)

    if (buttonLabel === 'YES') {
      // Check if firstNum is less than 64 before increasing countBox
      if (count <= 7) {
        setCountBox(countBox + firstNum)
      } else setCountBox(0)
    }
  }

  const handleReset = () => {
    setBoxNum(0)
    setCountBox(0)
    setCount(0)
  }
  if (count > 7) {
    handleReset()
  }

  console.log('countBox is ', countBox)
  //   const filteredArray = box[boxNum].filter((element, index) => index === 0)
  const firstElement = box[boxNum][0]

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-justify  font-bold"></h1>
      <div className="grid grid-cols-8 gap-4">
        {box[boxNum].map((singleBox, index) => (
          <div key={index} className="w-8 h-16">
            <button className="bg-gray-300 px-4 py-2 rounded-2xl">
              {singleBox}
            </button>

            <MathsButton
              yesLabel="YES"
              noLabel="NO"
              onClick={(label) => handleClick(label, firstElement)}
            />
          </div>
        ))}

        {count === 7 && (
          <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
            <button className="outline-noe px-4 py-1 rounded-full shadow-lg ">
              The number you imagined is {countBox}
            </button>
          </div>
        )}

        <div className="fixed flex flex-wrap justify-center bottom-3 inset-x-0 px-2">
          <button
            className="outline-noe px-4 py-1 rounded-full shadow-lg text-white bg-purple-600"
            onClick={handleReset}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainCode
