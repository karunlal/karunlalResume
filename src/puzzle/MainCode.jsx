import { useRef } from 'react'
import React from 'react'
import Button from '../components/Button.jsx'
import MathsButton from './MathsButton.jsx'
import { useState } from 'react'
import Modal from './Modal.jsx'
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
  const box = [
    { name: one, color: 'yellow' },
    { name: two, color: 'green' },
    { name: fourth, color: 'red' },
    { name: eighth, color: 'purple' },
    { name: sixteenth, color: 'pink' },
    { name: thirtytwoth, color: 'blue' },
    { name: sixtyforth, color: 'cyan' },
  ]
  const modal = useRef()
  const [boxNum, setBoxNum] = useState(0)
  const [countBox, setCountBox] = useState(0)
  const [count, setCount] = useState(0)

  const handleClick = (buttonLabel, firstNum) => {
    setCount(count + 1)
    console.log(buttonLabel, firstNum)

    if (boxNum < 6) setBoxNum(boxNum + 1)
    if (count === 6) {
      modal.current.open()
    }

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
  const firstElement = box[boxNum].name[0]

  return (
    <>
      <div className="container mx-auto py-10">
        <h1 className="text-justify  font-bold text-center md:text-left">
          BOX NUMBER {boxNum + 1}
        </h1>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {box[boxNum].name.map((singleBox, index) => {
            const color = `bg-${box[boxNum].color}-400 px-4 py-2 rounded-2xl`
            return (
              <div key={index} className="w-8 h-16">
                <form className="text-3xl md:text-5xl font-serif text-center md:text-left">
                  {/* "bg-slate-300 px-4 py-2 rounded-2xl" */}

                  {singleBox}
                </form>

                <MathsButton
                  yesLabel="YES"
                  noLabel="NO"
                  onClick={(label) => handleClick(label, firstElement)}
                />
              </div>
            )
          })}

          <Modal ref={modal} onClose={handleReset} buttonCaption={'X'}>
            <div className="flex justify-center w-full h-screen md:w-64 md:h-64 text-center">
              <h1 className=" font-bold text-5xl md:text-7xl text-stone-500 my-20">
                {countBox}
              </h1>
            </div>
          </Modal>

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
    </>
  )
}

export default MainCode
