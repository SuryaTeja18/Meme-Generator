import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Meme from './components/Meme'

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      topText:"",
      bottomText:"",
      showMeme:false,
      randomImage:""
    }
    this.reset=this.reset.bind(this)
    this.handleRandom=this.handleRandom.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }

  reset()
  {
    this.setState({
      toptext:"",
      bottomtext:"",
      showMeme:false,
      })
  }

  handleRandom()
  {
    let rn=Math.floor(Math.random()*100)
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(res=>res.data.memes)
    .then(memes=>this.setState({randomImage:memes[rn].url,showMeme:true}))
    .then(console.log(this.state.randomImage))
    .catch(err=>console.log(err))
  }

  handleChange()
  {
    this.setState({
      topText:document.getElementById("top").value,
      bottomText:document.getElementById("bottom").value
    })
  }

  render() {
    return (
      <>
        <header style={{background:"lightgray", textAlign:"center", color:"black"}}>
          <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="troll-face" height="100px"/>
          <h1>Meme Generator</h1>
        </header>
        <Form onClick={this.handleRandom} onChange={this.handleChange}/><br/>
        <div style={{textAlign:"center"}}><button onClick={this.reset}>Home</button></div><br/>
        <div className="meme">
          <center>{this.state.showMeme && 
            <img 
            src={this.state.randomImage} 
            width="400px" 
            height="500px" 
            alt="meme"/>}
          </center>
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </>
    );
  }
}

export default App;