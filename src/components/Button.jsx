import React from 'react'

const Button = ({ children }) => {
  return (
    <button
      className="relative   border-gray-400
     text-gray-800 
     font-bold py-2 px-4 
     rounded transition duration-300 
     ease-in-out hover:scale-110"
    >
      <span
        className="absolute inset-0 
      flex items-center justify-center
       w-full h-full transition duration-300 
       ease-in-out group-hover:scale-200"
      >
        {children}
      </span>
    </button>
  )
}

export default Button
