import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");


	useEffect(() => {
		console.log(`El color activo es: ${color}`)
	}, [color])
	return (
		<div className="d-flex flex-column align-item-center justify-content-center w-100">
			<div className="container border border-dark border-3 rounded col-md-2 p-5 mt-5 ">
				<div className="d-flex flex-column justify-content-center">
					<button
						className={`btn btn-success p-5 rounded-circle mb-3 ${color != "green" && "opacity-25"}`}
						onClick={() => {
							if (color == "green") {
								setColor("")
								return
							}
							setColor("green")
						}}
					>
					</button>
					<button
						className={`btn btn-warning p-5 rounded-circle mb-3 ${color != "yellow" && "opacity-25"}`}
						onClick={() => {
							if (color == "yellow") {
								setColor("")
								return
							}
							setColor("yellow")
						}}
					>
					</button>
					<button
						className={`btn btn-danger p-5 rounded-circle ${color != "red" && "opacity-25"}`}
						onClick={() => {
							if (color == "red") {
								setColor("")
								return
							}
							setColor("red")
						}}
					></button>
				</div>
			</div>


		</div>
	);
};

export default Home;
