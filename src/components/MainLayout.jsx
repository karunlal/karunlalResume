import React, { useState } from 'react'
import Profile from './Profile'
import Skills from './Skills'
import Education from './Education'
import Projects from './Projects'
import Button from './Button'
import MathsPuzzle from '../puzzle/MathsPuzzle'

const MainLayout = () => {
  const mainOptions = [
    { id: 1, heading: 'Profile' },
    { id: 2, heading: 'Skills' },
    { id: 3, heading: 'Education' },
    { id: 4, heading: 'Projects' },
    { id: 5, heading: 'Hobbies' },
  ]
  // State to manage which option is selected
  const [selectedOption, setSelectedOption] = useState('Profile')

  const onClickHandler = (event) => {
    // console.log(event)
    setSelectedOption(event)
  }
  console.log(selectedOption)

  return (
    <div className="flex">
      {/* Section 1: Navigation menu (left side) */}
      <div className="w-1/4 p-4 mt-40 ms-16">
        <ul className="space-y-8">
          {mainOptions.map((mainOption) => (
            <li
              className="cursor-pointer"
              key={mainOption.id}
              onClick={() => onClickHandler(mainOption.heading)}
            >
              <Button>{mainOption.heading}</Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Section 2: Display details (right side) */}
      <div className="w-3/4 p-4">
        {/* Render selected option */}
        {selectedOption === 'Profile' && <Profile />}
        {selectedOption === 'Skills' && <Skills />}
        {selectedOption === 'Education' && <Education />}
        {selectedOption === 'Projects' && <Projects />}
        {selectedOption === 'Hobbies' && <MathsPuzzle />}
      </div>
    </div>
  )
}

export default MainLayout
