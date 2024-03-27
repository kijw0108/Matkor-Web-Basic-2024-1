import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
	const [num, setNum] = useState(0);

  const sentID = () => {
  }

	return (
		<div className="App">
			{num}
			<button onClick={() => setNum(num + 1)}>Click me</button>
		</div>
	);
}

export default App;

