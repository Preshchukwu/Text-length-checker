import React from "react"
import './Show.css'



const Show = (probs)=>{
    return(
        <>
            
           <div className="mainContainer">
                <div className="inputContainer">
                    <label htmlFor="text"> Enter Your Text</label>
                    <input onChange={probs.detail} type="text" id="text"/>
                </div>
                <div className="textContainer">
                    <p>The length is {probs.length}</p>
                    <p>{probs.can}</p>
                </div>
           </div>
        </>
    )
}




export default Show