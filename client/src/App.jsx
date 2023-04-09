import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ count, setCount ] = useState(0);
  const [ text, setText ] = useState("#");

  function formatter(){
    
  }

  useEffect(()=>{
    const arrText = text.split(' ');
    let textWasChanged = false;
    let newText = "";
    
    if( arrText[arrText.length-1] === '' ) return;

    for(let i of arrText){
      if(i[0] !== "#" || i[0] !== " "){
        i = "#" + i;
        textWasChanged = true;
      }
    }

    newText = arrText.join('');

    if(textWasChanged) setText(newText);
  },[text])

  return (
    <div className="App">
      <input type="text" value={text} onChange={e=>{
        let newText = e.target.value;
        if( newText[ newText.length - 1 ] === "#" ){
          if( newText[ newText.length - 2 ] !== " " ){
            newText = newText.slice( 0, newText.length - 2 ) + " " + "#";
          }
        }
        setText(newText);
      }}/>
    </div>
      
  )
}

export default App
