import React from "react";
import PropTypes from "prop-types";

const Light = (props) => {
return (
    <div className={"light ${props.color}"}></div>
    )
}

Light.propTypes = {
	style: PropTypes.string
  };


export default Light;