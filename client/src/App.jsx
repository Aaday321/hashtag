import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ text, setText ] = useState("#");

  function formatter(){
    
  }

  useEffect(()=>{
    let arrText = text.split(' ');
    let textWasChanged = false;
    let newText = "";
    arrText = arrText.map(word=>{
      if(word[0] !== "#" && word[0] !== '') {
        textWasChanged = true;
        return "#" + word;
      } else {
        return word;
      };
    })

    arrText = arrText.map(word=>{
      let newWord = '';
      for(let i of word){
        if(i !== '.') newWord += i;
      }
      return newWord;
    })

    arrText = arrText.filter((word, index)=>{
      if(word === '#' && index !== arrText.length-1) return false;
      else return true;
    })

    console.log(arrText);

    newText = arrText.join(' ');

    if(textWasChanged) setText(newText);
  },[text])

  const divStyle = {
    backgroundColor:'#1a1a1a', width:'100vw', height:'100vh', display:'flex', alignItems:'center', 
    justifyContent:'center'
  }

  return (
    <div className = "App" style={divStyle}>
      <input type="text" value={text} onKeyDown={
        (e)=>{
          const validCharacters = 'abcdefghijklmnopqrstuvwxyz '.split('');
          let newText = e.target.value;
          if(e.key === 'Backspace'){
            if(newText[newText.length - 1] === '#') setText(newText.slice(0, -2));
            else setText(newText.slice(0, -1));
          }else if (validCharacters.includes(e.key.toLowerCase())) setText(c=>c+e.key);
          e.preventDefault();
        }
      }
      onChange={ e=>setText(e.target.value) }
      style={{maxWidth:'80%', height:'5%', borderRadius:'45px', fontSize:'25px', padding:'1rem 2rem', outline:'none', border: 'none'}}/>
    </div>
  )
}

export default App
