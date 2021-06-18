import React,{useState} from 'react'
import BtnComponent from './components/BtnComponent';
import TimerComponent from './components/TimerComponent';
import ColorComponent from './components/ColorComponent'
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0,s:0,m:0,h:0});
  const [interv, setInterv] = useState();
  const [color, setColor] = useState('rgb(20, 15, 46)');
  const [status, setStatus] = useState(0);
  
  const start=()=>{
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  }
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  const stop=()=>{
    clearInterval(interv);
    setStatus(2);
  }

  const resume = () => start();

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const changeSkyColor=()=>{
    setColor("#4287f5");
  }

  const changePinkColor=()=>{
    setColor("#c9245e");
  }

  const changeGigoColor=()=>{
    setColor("#0a4952");
  }

  const changeYellowColor=()=>{
    setColor("#8c8811");
  }

  return (
    <div className="App">
      <div className="stopwatch">
      <TimerComponent time={time} color={color}/>
        <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
        <ColorComponent changeSkyColor={changeSkyColor} changeGigoColor={changeGigoColor} changePinkColor={changePinkColor} changeYellowColor={changeYellowColor} />
      </div>
    </div>
  );
}

export default App;