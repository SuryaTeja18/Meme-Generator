import React from 'react'

const Form =(props)=>{return(
<form style={{textAlign:"center"}}>
    <input 
        id="top"
        type="text" 
        placeholder="Top text for meme" 
        onChange={props.onChange}
    /> | 
    <input 
        id="bottom"
        type="text" 
        placeholder="Bottom text for meme" 
        onChange={props.onChange}
    /> | 
    <input 
        type="button" 
        onClick={props.onClick} 
        value="Generate for another random image"
    />
</form>)}

export default Form