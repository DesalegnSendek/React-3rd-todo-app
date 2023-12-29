import React, { useState } from 'react'
import './Counter.css'
import Map from '../map_method/Map'
const Counter = () => {
const [Counter,setCounter] = useState(0)

function increase(){
    setCounter(prev => prev + 1)
}
function decrease(){
    setCounter(prev=>prev-1)
}
function reset(){
    setCounter(0)
}

const [num,setNum] = useState(0)
function GenerateNum(){
    setNum(Math.floor(Math.random()*100))
}

  return (
    <div>
        <button onClick={increase}>Up Count</button>
        <button><h1>{Counter}</h1></button>
        <button onClick={decrease}>Down Count</button>
        <button onClick={reset}>Reset</button>
        <button onClick={GenerateNum}> Generate number <h1>{num}</h1></button>
        <Map></Map>
    </div>
  )
}

export default Counter