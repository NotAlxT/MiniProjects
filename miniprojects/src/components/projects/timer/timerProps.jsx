import React from 'react'
import './timer.css'

export default function TimerProps(props) {
    return (<div>

        <div className="Timer">
            <div className='timer-h'>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</div>
            <h1>:</h1>
            <div className='timer-m'>{props.time.m >= 10 ? props.time.m : "0" + props.time.m}</div>
            <h1>:</h1>
            <div className='timer-s'>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</div>
            <h1>:</h1>
            <div className='timer-ms'>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</div>
        </div>
        <div className='timer-buttons'>
            <div className='timer-status-0'>
                {(props.status === 0) ?
                    <button className='timer-button' onClick={props.start}>start</button> : ""
                }
            </div>
            <div className='timer-status-1'>
                {(props.status === 1) ?
                    <div>
                        <button className='timer-button' onClick={props.stop}>stop</button>
                        <button className='timer-button' onClick={props.reset}>reset</button>
                    </div> : ""
                }
            </div>
            <div className='timer-status-2'>
                {(props.status === 2) ?
                    <div>
                        <button className='timer-button' onClick={props.resume}>resume</button>
                        <button className='timer-button' onClick={props.reset}>reset</button>
                    </div> : ""
                }
            </div>
        </div>
        <div className='codeContainer'>
            <p className='code'> <a className='codeAnchor' href="https://github.com/NotAlxT/MiniProjects/tree/main/miniprojects/src/components/projects/timer" target="_blank" rel='noreferrer' >Code</a></p>
        </div>

    </div>)
}
