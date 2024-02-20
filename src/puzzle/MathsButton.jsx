const MathsButton = ({ yesLabel, noLabel, onClick }) => {
  const handleYesClick = () => {
    onClick('YES')
  }
  const handleNoClick = () => {
    onClick('NO')
  }

  return (
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div
        className="flex flex-wrap justify-center gap-3 shadow-lg
         bg-white px-3 py-2 rounded-3xl"
      >
        <button
          className="outline-noe px-4 py-1 rounded-full shadow-lg text-black  bg-green-500 "
          onClick={handleYesClick}
        >
          {yesLabel}
        </button>
        <button
          className="outline-noe px-4 py-1 rounded-full shadow-lg text-black bg-red-500"
          onClick={handleNoClick}
        >
          {noLabel}
        </button>
      </div>
    </div>
  )
}

export default MathsButton
