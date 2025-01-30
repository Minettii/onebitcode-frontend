import Card from "./components/Card";
import "./styles/globals.scss";
import swPoster from "./assets/sw.jpg";
import esbPoster from "./assets/esb-poster.jpg";
import rotjPoster from "./assets/rotj-poster.jpg";

export default function App() {
	return (
		<>
			<Card title="Pôster: Star Wars (1977)" posterImg={swPoster} />
			<Card
				title="Pôster: Empire Strikes Back (1980)"
				posterImg={esbPoster}
			/>
			<Card
				title="Pôster: Return of the Jedi (1983)"
				posterImg={rotjPoster}
			/>
		</>
	);
}
