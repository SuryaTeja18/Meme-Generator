import React from 'react'

const Meme = (props) => {
    return(
        <div><img src={props.url} alt="meme" height="500px" width="500px"/></div>
    )
}
export default Meme