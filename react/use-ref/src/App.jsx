import { useState } from "react";
import { useRef } from "react";

export default function App() {
	let variable = 0;
	const [state, setState] = useState(0);
	const ref = useRef(0);

	const showValues = () => {
		alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
      `);
	};

	const increaseVariable = () => variable++;
	const increaseRef = () => {
		ref.current++;
	};

	const increaseState = () => {
		setState((state) => state + 1);
	};

	return (
		<div>
			<h2>Conhecento o useRef</h2>
			<hr />
			<div style={{ display: "flex" }}></div>
			<div>
				<p>Variável: {variable}</p>
				<p>Ref: {ref.current}</p>
				<p>State: {state}</p>
			</div>
			<div
				style={{
					display: "flex",
					gap: "1rem",
				}}
			>
				<button onClick={increaseVariable}>Aumentar Variável</button>
				<button onClick={increaseRef}>Aumentar Ref</button>
				<button onClick={increaseState}>Aumentar State</button>
			</div>
			<hr id="space" />
			<button onClick={showValues}>Exibir Valores</button>
		</div>
	);
}
