import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ text, setText ] = useState("#");

  function handleKeyDown(e){
    //This code executes every time a key is pressed while selecting the input field.
  }

  useEffect(()=>{
    //Add code here to be executed every time the value of text is updated using setText();
  },[text])

  return (
    <div className="App">
      <input type="text" value={text} onChange={e=>setText(e.target.value)} onKeyDown={(e)=>handleKeyDown(e)} />
    </div>
      
  )
}

export default App
