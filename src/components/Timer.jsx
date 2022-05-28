   
import React, { useEffect, useState } from "react";

const Timer = (props) => {
	const [time, setTime] = useState(props.initialTime);
	const [stop, setStop] = useState(true);

	useEffect(() => {
		let id = null;
		if (!stop) {
			if (time < props.endTime) {
				id = setInterval(() => {
					setTime((time) => time + 1);
				}, 1000);
			}
		
		} else {
			clearInterval(id);
		}

		return () => {
			clearInterval(id);
		};
	});

	return (
		<div className="container">
			<h1>{time}</h1>

			{/* Start button */}
			<button
				disabled={!props.endTime}
				className="btn btn-success m-3 px-5"
				onClick={() => {
					setStop(false);
				}}
			>
				Start
			</button>

			{/* Pause button */}
			<button
				disabled={!props.endTime}
				className="btn btn-warning m-3 px-5"
				onClick={() => {
					setStop(true);
				}}
			>
				Pause
			</button>

			{/* Reset button */}
			<button
				disabled={!props.endTime}
				className="btn btn-danger m-3 px-5"
				onClick={() => {
					setTime(0);
				}}
			>
				Reset
			</button>
		</div>
	);
};

export default Timer;