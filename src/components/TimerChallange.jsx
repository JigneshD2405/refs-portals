import { useState, useRef } from "react"
import ResultModel from "./ResultModel.jsx"
export default function TimeChallange({ title, targetedTime }) {
    const timer = useRef()
    const dailog = useRef()
    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)
    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
            dailog.current.showModal()
        }, targetedTime * 1000)
        setTimerStarted(true)
    }
    function handleStop() {
        clearTimeout(timer.current)
    }
    return (
        <>
            <ResultModel ref={dailog} result="lost" targetTime={targetedTime} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetedTime} Second{targetedTime > 1 ? "s" : ""}
                </p>
                <p >
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? "Stop" : "Start"} Challange
                    </button>
                </p>
                <p className={timerStarted ? "active" : ""}>
                    {timerStarted ? "Time is running" : "Timer inactive"}
                </p>
            </section>
        </>
    )
}