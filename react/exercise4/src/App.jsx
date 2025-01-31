import { useState } from "react";
import styles from "./App.module.scss";
import Button from "./components/Button";

function generatePassword(length = 12) {
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
	let password = "";
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * chars.length);
		password += chars[randomIndex];
	}
	return password;
}

function copyPassword(password) {
	navigator.clipboard.writeText(password);
}

export default function App() {
	const [copyButtonText, setCopyButtonText] = useState("Copiar");
	const [password, setPassword] = useState("");

	return (
		<>
			<div className={styles.wrapper}>
				<h1 className={styles.mainTitle}>Gerador de senhas</h1>
				<div className={styles.buttonsContainer}>
					<Button
						onClick={() => {
							setPassword(generatePassword(12));
							setCopyButtonText("Copiar");
						}}
					>
						Gerar!
					</Button>
					<Button
						onClick={() => {
							copyPassword(password);
							setCopyButtonText("Copiado!");
						}}
					>
						{copyButtonText}
					</Button>
				</div>
				<p>{password}</p>
			</div>
		</>
	);
}
