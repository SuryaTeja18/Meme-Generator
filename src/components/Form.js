import React from 'react'

const Form =(props)=>{return(
<form style={{textAlign:"center"}}>
    <input type="text" placeholder="Top text for meme"/>|
    <input type="text" placeholder="Bottom text for meme"/>|
    <input type="button" onClick={props.onClick} value="Generate for another random image"/>
</form>)}

export default Form