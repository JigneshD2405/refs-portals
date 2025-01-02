import Player from './components/Player.jsx';
import TimeChallange from './components/TimerChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallange title={"Easy"} targetedTime={1} />
        <TimeChallange title={"NOT EASY"} targetedTime={5} />
        <TimeChallange title={"GETTING TOOGH"} targetedTime={10} />
        <TimeChallange title={"PROS ONLY"} targetedTime={15} />
      </div>
    </>
  );
}

export default App;
