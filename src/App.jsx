import { useRef, useState } from 'react'
import './App.css'

function App() {

  const input = useRef(null)
  const [inputValue, setInputValue] = useState("")

  function colorChange(){
    const red = parseInt(Math.random() * 256)
    const green = parseInt(Math.random() * 256)
    const blue = parseInt(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
  }

  return (
    <>
    <div className="container">
      <h1>Type something...</h1>
    <input ref={input} onChange={(e) => {
      setInputValue(e.target.value)
      
      console.log(e.target.value);
    }} type="text" placeholder='Enter smth' />
    <h2 style={{
      color: colorChange()
    }} >{inputValue}</h2>
    </div>
    </>
  )
}

export default App;
