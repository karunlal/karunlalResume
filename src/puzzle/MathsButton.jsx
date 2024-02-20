const MathsButton = ({ yesLabel, noLabel, onClick }) => {
  return (
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div
        className="flex flex-wrap justify-center gap-3 shadow-lg
         bg-white px-3 py-2 rounded-3xl"
      >
        <button
          className="outline-noe px-4 py-1 rounded-full shadow-lg text-black  bg-green-500 "
          onClick={onClick}
        >
          {yesLabel}
        </button>
        <button
          className="outline-noe px-4 py-1 rounded-full shadow-lg text-black bg-red-500"
          onClick={onClick}
        >
          {noLabel}
        </button>
      </div>
    </div>
  )
}

export default MathsButton
