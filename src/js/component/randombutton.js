import React from "react";


const Randombutton = (props) => {

    const randomLight=()=>{
        let n=Math.floor(Math.random()*3)
        let newColor=""
        if (n==0) {newColor="red"}
        else if (n==1) {newColor="yellow"}
        else {newColor="green"}
        props.setLights({...props.lights, 
            ["red"]: 'off', ["yellow"]: 'off', ["green"]: 'off', 
            [newColor]:'on'})
    }
    return (
        <div>
            <button type="button" className="btn btn-dark mt-2" onClick={()=>{randomLight()}}>Random light</button>
        </div>
    )
}
export default Randombutton;