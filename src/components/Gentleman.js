import React from 'react'

function Gentleman(props){
    return(
        <div>
            <h2>{props.magic.id}</h2>
            <h3>{props.magic.name}</h3>
            <p>{props.magic.summary}</p>
            <img src={props.magic.imgUrl}></img>
        </div>
    )
}

export default Gentleman;