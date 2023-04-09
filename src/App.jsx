import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [ text, setText ] = useState("#");

  function handleKeyDown(e){
    const validCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890 '.split('');
    let newText = e.target.value;
    if(e.key === 'Backspace'){
      if(newText[newText.length - 1] === '#') setText(newText.slice(0, -2));
      else setText(newText.slice(0, -1));
    }else if (validCharacters.includes(e.key.toLowerCase())) setText(c=>c+e.key);
    e.preventDefault();
  }

  useEffect(()=>{
    let arrText = text.split(' ');
    let textWasChanged = false;
    let newText = "";
    arrText = arrText.map(word=>{
      if(word[0] !== "#" && word[0] !== '') {
        textWasChanged = true;
        return "#" + word.split('').filter(letter=>letter==='.' ? false : true).join('');
      } else {
        return word.split('').filter(letter=>letter==='.' ? false : true).join('');
      };
    })

    arrText = arrText.filter((word, index)=>{
      if(word === '#' && index !== arrText.length-1) return false;
      else return true;
    })

    newText = arrText.join(' ');

    if(textWasChanged) setText(newText);
  },[text])

  const divStyle = {
    backgroundColor:'#1a1a1a', width:'100vw', height:'100vh', display:'flex', alignItems:'center', 
    justifyContent:'center', overflowX: 'hidden', flexDirection: 'column'
  };

  const inputStyle = { width:'70%' ,maxWidth:'80%', height:'5%', borderRadius:'45px', fontSize:'25px', padding:'1rem 2rem', outline:'none', border: 'none'};

  return (
    <div className = "App" style={ divStyle }>
      <h1>{"HASHDAT 🤟🏿"}</h1>
      <input type="text" value={ text } onKeyDown={ e=>handleKeyDown(e) }
      onChange={ e=>setText(e.target.value) }
      style={inputStyle}/>
    </div>
  )
}

export default App
