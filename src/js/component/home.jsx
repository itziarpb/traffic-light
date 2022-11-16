import React from "react";
import Light from "./light";

const Home = () => {
	
	return (
		<div className="text-center">
			<div className="text-center black"></div>
			<div className="text-center traffic">
				<Light color={"red"} />
				<Light color={"yellow"} />
				<Light color={"green"} />
			</div>
		
		</div>

	);
};

export default Home;
