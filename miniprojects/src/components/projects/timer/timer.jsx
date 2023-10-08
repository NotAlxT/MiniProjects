import React, { useState } from 'react'
import TimerProps from './timerProps.jsx';

export default function ClockTimer() {
    const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
    const [interv, setInterv] = useState()
    const [status, setStatus] = useState(0);
    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };
    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    }
    const reset = () =>{
        clearInterval(interv);
        setStatus(0);
        setTime({ms:0, s:0, m:0, h:0})
    }
    const resume = () => start();
    
    var updatedMs = time.ms, updatedS= time.s, updatedM = time.m, updatedH = time.h;
    const run = () => {
        if(updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        if(updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        if(updatedMs === 99){
            updatedS++;
            updatedMs = 0
        }
        updatedMs++;
        return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
    };
  return (
    <div>
        <TimerProps time={time} resume={resume} reset={reset} stop={stop} start={start} status={status}/>
    </div>
  )
}