import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Meme from './components/Meme'

class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      allmemes:[],
      toptext:"",
      bottomtext:"",
      showAllMemes:0,
      randomImage:""
    }
    this.reset=this.reset.bind(this)
    this.showAll=this.showAll.bind(this)
    this.handleRandom=this.handleRandom.bind(this)
  }

  showAll()
  {
    if(this.state.allmemes.length===0)
    {
      const memes=[]
      fetch("https://api.imgflip.com/get_memes")
      .then(res=>res.json())
      .then(res=>{
      res.data.memes.map(meme=>memes.push(<Meme key={meme.id} name={meme.name} url={meme.url}/>))
      })
      .catch(err=>console.log(err))
      this.setState({
        allmemes:memes,
      })
    }
  }
  
  reset()
  {
    this.setState({
      toptext:"",
      bottomtext:"",
      showAllMemes:0,
      })
  }

  handleRandom()
  {
    let rn=Math.floor(Math.random()*this.state.allmemes.length)
    this.setState({
      randomImage:this.state.allmemes[rn].url
    })
  }

  render() {
    return (
      <>
        <header style={{background:"lightgray", textAlign:"center", color:"black"}}>
          <img src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="troll-face" height="100px"/>
          <h1>Meme Generator</h1>
        </header>
        <Form onClick={this.handleRandom}/><br/>
        <div style={{textAlign:"center"}}><button onClick={this.showAll}>Fetch All-Images</button> | <button onClick={this.reset}>Home</button></div>
        <img src={this.state.randomImage} alt="meme"/>
      </>
    );
  }
}

export default App;