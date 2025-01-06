import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null)
  const player = useRef()
  function handleClck() {
    setPlayerName(player.current.value)
    player.current.value = ""
  }

  return (
    <section id="player">
      <h2>Welcome  {playerName ?? "unknown entity"}</h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={handleClck}>Set Name</button>
      </p>
    </section>
  );
}
