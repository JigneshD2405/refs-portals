import { useState, useRef } from "react";
export default function Player() {
  const playerInput = useRef()
  const [enteredPlayerName, setEnteredPlayerName] = useState(null)

  const handleClick = () => {
    setEnteredPlayerName(playerInput.current.value)
    playerInput.current.value = ""
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerInput} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
