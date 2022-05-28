import { useState } from "react";
import "./App.css";
import Timer from "./components/Timer";

function App() {
	const [endTime, setEndTime] = useState("");
	return (
		<div className="App container-sm">
			<h1 className="text-white bg-dark px-3 py-2">Timer</h1>
			<h3>Enter the end time: </h3>
			<input
				type="number"
				placeholder="Enter in seconds..."
				className="mb-5 rounded border-top-0 border-bottom-0"
        onChange={(e)=>{setEndTime(e.target.value)}}
			/>
			<Timer initialTime={0} endTime={endTime} />
		</div>
	);
}

export default App;