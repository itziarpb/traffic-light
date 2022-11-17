import React from "react";
import PropTypes from "prop-types";

const Light = (props) => {
  const switchLight = ()=>{
   if (props.lights[props.color] === 'on') {
    props.setLights({...props.lights, [props.color]: 'off'} )}
    else {
      props.setLights({...props.lights, ["red"]: 'off',
                                        ["yellow"]: 'off',
                                        ["green"]: 'off',
                                        [props.color]: 'on',
                                        })
    }
     /*...props.lights coloca todos los valores actuales del state
    acontinuacion cambia un valor o añade uno nuevo
    */

  }
  return (
      <div 
      className={`light ${props.style}`} 
      onClick={()=>{switchLight()}} ></div>
      )
}

Light.propTypes = {
	style: PropTypes.string
  };


export default Light;