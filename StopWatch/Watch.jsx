import React, { useState , useRef, useEffect } from 'react'
import "./Watch.css"

function Watch() {
  const [TotalSecs,SetTotalSecs] = useState(0);
  const intervalRef = useRef(null);
  const hours = Math.floor(TotalSecs / 3600);
  const minutes = Math.floor((TotalSecs % 3600) / 60);
  const seconds = TotalSecs % 60;

  const handleStart = () =>{
    if(intervalRef.current){
      return;
    }
    intervalRef.current = setInterval(()=>{
      SetTotalSecs(prev => prev + 1);
    }, 1000)
  }

  const handleStop = () =>{
    console.log(`Before Clear ${intervalRef.current}`);
    clearInterval(intervalRef.current);
    console.log(`After Clear ${intervalRef.current}`);
    intervalRef.current = null;
    console.log(`null ${intervalRef.current}`);
  }

  const handleReset = () =>{
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    SetTotalSecs(0);
  }

  // Count Down Functions

  const [CountDownSecs, SetCountDownSecs] = useState("");
  const [isCountDown, setIsCountDown] = useState(false);
  const [timeUnit, setTimeUnit] = useState("seconds");
  const CountDownIntervalRef = useRef(null);
  const [RemainingSecs, setRemainingSecs] = useState(0);
  const CountDownhours = Math.floor(RemainingSecs / 3600);
  const CountDownminutes = Math.floor((RemainingSecs % 3600) / 60);
  const CountDownseconds = RemainingSecs % 60;
  
  useEffect(()=>{
    if(RemainingSecs === 0 && CountDownIntervalRef.current){
      clearInterval(CountDownIntervalRef.current);
      CountDownIntervalRef.current = null;
      alert("Count Down Finished!");
    }
  }, [RemainingSecs]);

  const handleCountDownStart = () =>{
    if(CountDownIntervalRef.current || CountDownSecs === 0){
      return;
    }
    let totalTestSecs = (timeUnit === "seconds") ? CountDownSecs :
                        (timeUnit === "minutes") ? CountDownSecs * 60 :
                        (timeUnit === "hours") ? CountDownSecs * 3600 : CountDownSecs;
    setRemainingSecs(totalTestSecs);
    CountDownIntervalRef.current = setInterval(()=>{
      setRemainingSecs(prev => prev - 1);
    }, 1000);
  }

  const handleCountDownReset = () =>{
    clearInterval(CountDownIntervalRef.current);
    CountDownIntervalRef.current = null;
    setRemainingSecs(0);
    SetCountDownSecs(0);
  }

  return (
    <>
    <>
      <h1 className='Watch-Header'>Choose Mode</h1>
      <div className='Watch-Mode-Btns'>
        <button className={`Watch-Mode-Btn `} onClick={()=>setIsCountDown(false)}>Stop Watch</button>
        <button className={`Watch-Mode-Btn `} onClick={()=>setIsCountDown(true)}>Count Down</button>
      </div>
    </>

    {isCountDown? <div className='Watch-Page'>
      <div className='Watch-Content'>
        <h1 className='Watch-Title'>Count Down</h1>
        <div>
          <input className="Watch-Input" type="number" placeholder='Enter Seconds...' onChange={(e)=>SetCountDownSecs(Number(e.target.value))} value={CountDownSecs} />
          <select  name="timeUnit" id="timeUnit" onChange={(e)=>setTimeUnit(e.target.value)}>
            <option value="seconds">Seconds</option>
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
          </select>
          <button className='timeUnit-Btn tstart' onClick={()=>handleCountDownStart()}>Start</button>
        </div>
        <h1 className='Watch-Time'>{CountDownhours.toString().padStart(2, '0')}:{CountDownminutes.toString().padStart(2, '0')}:{CountDownseconds.toString().padStart(2, '0')}</h1>
        <button className='timeUnit-Btn treset' onClick={()=>{handleCountDownReset()}}>Reset</button>
      </div>
    </div>:
    <div className='Watch-Page'>
      <div className='Watch-Content'>
        <h1 className='Watch-Title'>Stop Watch</h1>
        <h1 className='Watch-Time'>{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h1>
        <div className='Watch-Btns'>
          <button className='Watch-Btn Start' onClick={()=>handleStart()}>Start</button>
          <button className='Watch-Btn Stop' onClick={()=>handleStop()}>Stop</button>
          <button className='Watch-Btn Reset' onClick={()=>{handleReset()}}>Reset</button>
        </div>
      </div>
    </div>
    }
    </>
  )
}

export default Watch