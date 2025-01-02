// import { forwardRef } from "react"
//Method used before React 19

// const Result = forwardRef(function ResultModel({ result, targetTime }, ref) {
//     return <dialog className="result-modal" ref={ref} >
//         <h2>You {result}</h2>
//         <p>The target time was <strong>{targetTime} seconds.</strong></p>
//         <p>You stopped the timer with <strong>X second left.</strong></p>
//         <form method="dailog">
//             <button>Close</button>
//         </form>
//     </dialog>
// })
// export default Result

export default function ResultModel({ ref, result, targetTime }) {
    return <dialog className="result-modal" ref={ref} >
        <h2>You {result}</h2>
        <p>The target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>X second left.</strong></p>
        <form method="dailog">
            <button>Close</button>
        </form>
    </dialog>
}