import { useRef, useState } from "react"
import ResultModal from "./ResultModal"

export default function TimerChallenge({ title, targetTime }) {
    let timer = useRef()
    let dailog = useRef()
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevRemainingTime => prevRemainingTime - 10)
            dailog.current.open()
        }, 10)
    }
    const handleStop = () => {
        clearTimeout(timer.current)
    }

    return (
        <>
            <ResultModal ref={dailog} result={"Lost"} targetTime={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? "Stop" : "Start"} Challenge
                    </button>
                </p>
                <p className={timerStarted ? "active" : ""}>
                    {timerStarted ? "Time is running..." : "Timer inactive"}
                </p>
            </section >
        </>
    )
}