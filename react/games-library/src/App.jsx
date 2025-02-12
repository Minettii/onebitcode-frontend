import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import useGameCollection from "./hooks/useGameCollection";

export default function App() {
	const { games, addGame, removeGame } = useGameCollection();

	return (
		<div id="app">
			<h1>Biblioteca de Jogos</h1>
			<NewGameForm addGame={addGame} />
			<div className="games">
				{games.length > 0 ? (
					games.map((game) => (
						<Game
							key={game.id}
							cover={game.cover}
							title={game.title}
							onRemove={() => removeGame(game.id)}
						/>
					))
				) : (
					<h2 style={{ margin: "4rem auto" }}>
						Biblioteca Vazia. Tende adicionar jogos.
					</h2>
				)}
			</div>
		</div>
	);
}
