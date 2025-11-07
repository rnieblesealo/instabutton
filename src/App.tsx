import { useState } from "react"

interface ButtonProps {
  score: number,
  setScore: React.Dispatch<React.SetStateAction<number>>
}

interface ScoreCounterProps {
  rafaScore: number,
  elizabethScore: number,
}

const ElizabethsButton = ({ score, setScore }: ButtonProps) => {
  return (
    <div className="pt-4 pb-7 px-4 bg-gray-100 rounded-4xl w-50 aspect-square flex items-center justify-center">
      <button
        className="bg-red-500 p-4 aspect-square w-40 rounded-3xl shadow-[0px_10px_0px_rgba(134,24,29,1)] active:shadow-[0px_0px_0px_rgba(134,24,29,1)] active:translate-y-3 flex items-center justify-center cursor-pointer"
        style={{
          transition: "all 0s"
        }}
        onMouseUp={() => setScore(score + 1)}
      >
        <img src="/public/eli.png" className="w-50" />
      </button>
    </div>
  )
}

const RafasButton = ({ score, setScore }: ButtonProps) => {
  return (
    <div className="pt-4 pb-7 px-4 bg-gray-100 rounded-4xl w-50 aspect-square flex items-center justify-center">
      <button
        className="bg-slate-500 p-4 aspect-square w-40 rounded-3xl shadow-[0px_10px_0px_rgba(67,79,97,1)] active:shadow-[0px_0px_0px_rgba(67,79,97,1)] active:translate-y-3 flex items-center justify-center cursor-pointer"
        style={{
          transition: "all 0s ease"
        }}
        onMouseUp={() => setScore(score + 1)}
      >
        <img src="/public/rafa.png" className="w-50" />
      </button>
    </div>
  )
}

const ScoreCounter = ({ rafaScore, elizabethScore }: ScoreCounterProps) => {
  function scoreMessage() {
    if (rafaScore == 0 && elizabethScore == 0) {
      return "#NOMOVIES #LOCKED IN"
    } else if (rafaScore == elizabethScore) {
      return "It is a tie :/"
    } else if (rafaScore > elizabethScore) {
      return "Rafa is winning!"
    } else {
      return "Elizabeth is winning!"
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center">
        <p className="font-pixel mx-4 w-20 text-center text-gray-600">RAFAEL</p>
        <div className="bg-gray-800 bg-black rounded-lg flex flex-row items-center justify-center">
          <p className="font-pixel text-3xl text-white text-center p-4 w-20">{rafaScore}</p>
          <div className="h-20 border-1 border-white" />
          <p className="font-pixel text-3xl text-white text-center p-4 w-20">{elizabethScore}</p>
        </div>
        <p className="font-pixel mx-4 w-20 text-center text-gray-600">ELIZABETH</p>
      </div>
      <p className="font-pixel text-gray-400 mt-4">{scoreMessage()}</p>
    </div>
  )
}

const App = () => {
  const [rafaScore, setRafaScore] = useState(0)
  const [elizabethScore, setElizabethScore] = useState(0)

  return (
    /* Used to center the app's main container */
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {/* Contains app items */}
      <div className="flex flex-col items-center gap-10 w-min h-min">
        <ElizabethsButton
          score={elizabethScore}
          setScore={setElizabethScore}
        />
        <ScoreCounter
          rafaScore={rafaScore}
          elizabethScore={elizabethScore}
        />
        <RafasButton
          score={rafaScore}
          setScore={setRafaScore}
        />
      </div>
    </div>
  )
}

export default App