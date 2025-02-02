import React, { useState } from "react";
import '../../styles/index.css'; // Asegúrate de que la ruta sea correcta

// Crea tu primer componente
export function Home() {
	const [selectedColor, setSelectedColor] = useState("yellow");

	return (
		<div className="traffic-light">
			<div
				onClick={() => setSelectedColor("red")}
				className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
			<div
				onClick={() => setSelectedColor("yellow")}
				className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
			<div
				onClick={() => setSelectedColor("green")}
				className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
		</div>
	);
}

export default Home;
