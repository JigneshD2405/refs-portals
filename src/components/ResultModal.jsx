import { useRef, useImperativeHandle } from "react"
export default function ResultModal({ ref, result, targetTime }) {
    let dailog = useRef()
    useImperativeHandle(ref, () => {
        return {
            open() {
                dailog.current.showModal()
            }
        }
    })

    return <dialog ref={dailog} className="result-modal" >
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X seconds left</strong></p>
        <form method="dailog">
            <button>Close</button>
        </form>
    </dialog>
}

// Before React 19 this method was used
// import { forwardRef } from "react"
// const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
//     return <dialog ref={ref} className="result-modal" >
//         <h2>You {result}</h2>
//         <p>The target time was <strong>{targetTime} seconds.</strong></p>
//         <p>You stopped the timer with <strong>X seconds left</strong></p>
//         <form method="dailog">
//             <button>Close</button>
//         </form>
//     </dialog>
// })
// export default ResultModal