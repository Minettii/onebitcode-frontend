import { useEffect, useState } from "react";

async function fetchPokemon() {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon");
	const data = await response.json();
	return data.results;
}

export default function App() {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		fetchPokemon().then((results) => {
			setPokemon(results);
		});
	}, []);

	return (
		<div className="app">
			<div>
				<h2>Pokémon</h2>
				<ul className="pokemon">
					{pokemon.map((mon) => (
						<li key={mon.name}>
							<span>{mon.name}</span>
							<button>Ver detalhes</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
