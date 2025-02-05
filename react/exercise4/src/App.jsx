import { useState } from "react";
import styles from "./App.module.scss";
import Button from "./components/Button";
import NumInput from "./components/NumInput";

function generatePassword(pswdLength) {
	console.log(pswdLength);
	console.log(typeof pswdLength);
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
	let password = "";
	for (let i = 0; i < pswdLength; i++) {
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
	const [pswdLength, setPswdLength] = useState(12);

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles.mainTitle}>Gerador de senhas</h1>
				<div className={styles.wrapper}>
					<label htmlFor="pswdSize">Tamanho:</label>
					<NumInput
						id="pswdSize"
						pswdLength={pswdLength}
						setPswdLength={setPswdLength}
					></NumInput>
				</div>
				<div className={styles.wrapper}>
					<Button
						onClick={() => {
							setPassword(generatePassword(pswdLength));
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
				<p className={styles.result}>{password}</p>
			</div>
		</>
	);
}
