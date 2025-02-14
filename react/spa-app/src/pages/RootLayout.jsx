import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
	return (
		<>
			<Header />
			<main>
				<p>Layout Principal! Abaixo conteúdo de Rota.</p>
				<hr />
				<Outlet />
			</main>
			<footer>
				<hr />
				<p>Feito com React Router DOM</p>
			</footer>
		</>
	);
}
