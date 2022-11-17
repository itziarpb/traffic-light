import React, {useState} from "react";
import Light from "./light";
import Randombutton from "./randombutton";

const Home = () => {
	const [lights, setLights] = useState({
		red:'off',
		yellow:'on',
		green:'off',
	})
/*Estructura useState: valor, funcion, valor por defecto */

	return (
		<div className="text-center">
			<div className="text-center black"></div>
			<div className="text-center traffic">
				<Light 
					color={"red"}
					style={lights.red === 'off' ? "red" : "redOn" }
					setLights={setLights}
					lights={lights}
					/>
				<Light 
					color={"yellow"}
					style={lights.yellow === 'off' ? "yellow" : "yellowOn" }
					setLights={setLights}
					lights={lights}
					/>
				<Light 
					color={"green"}
					style={lights.green === 'off' ? "green" : "greenOn" }					
					setLights={setLights}
					lights={lights}
					/>
			</div>
			<div>
				<Randombutton/>
			</div>
		</div>

	);
};

export default Home;
