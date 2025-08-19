import { DoubleIntegerInput } from './components/DoubleIntegerInput';
import { Space, Button } from 'antd';
import { Player } from './player/Player.js';

function App() {
  const player = new Player();

  const play = () => {
    player.play({
      bpm: 120,
      repeats: 4,
      introLength: 4,
      loopLength: 4,
      intro: [
        { type: "metronome", time: 0, vol: 1 },
        { type: "metronome", time: 1, vol: 1 },
        { type: "metronome", time: 2, vol: 1 },
        { type: "metronome", time: 3, vol: 1 },
        { type: "snare", time: 3, vol: 1 },
        { type: "snare", time: 3.5, vol: 1 },
        { type: "snare", time: 3.75, vol: 1 },
      ],
      loop: [
        { type: "kicker", time: 0, vol: 1 },
        { type: "hihat_closed", time: 0.5, vol: 1 },
        { type: "kicker", time: 1, vol: 1 },
        { type: "snare", time: 1, vol: 1 },
        { type: "hihat_closed", time: 1.5, vol: 1 },
        { type: "kicker", time: 2, vol: 1 },
        { type: "hihat_closed", time: 2.5, vol: 1 },
        { type: "kicker", time: 3, vol: 1 },
        { type: "snare", time: 3, vol: 1 },
        { type: "hihat_closed", time: 3.5, vol: 1 },
      ]
    });
  };

  return <>
    <Space direction="vertical">
      <DoubleIntegerInput label="Time Signature" values={[4, 4]} />
      <DoubleIntegerInput label="Swing" values={[1, 1]} />
      <Button onClick={play}>Start</Button>
    </Space>
  </>
};

export { App };