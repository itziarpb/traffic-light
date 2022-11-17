import React from "react";

const randomLight=()=>{
    props.setLights({...props.lights, ["red"]: 'off', ["yellow"]: 'off', ["green"]: 'off',})
}

const Randombutton = () => {

    return (
        <div>
            <button type="button" className="btn btn-dark" onClick={()=>{randomLight()}}>Random light</button>
        </div>
    )
}
export default Randombutton;