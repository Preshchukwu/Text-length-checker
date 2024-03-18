import React from "react";


const TextLength = (probs)=>{
    return(
        <div>
            <p> The length of the value of the input field is {probs.length}</p> 
            <p> {probs.length <= 7? `Text too short` : `Text too long`}</p>
        </div>
    )
}

export default TextLength