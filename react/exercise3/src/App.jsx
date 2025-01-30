import "./style/globals.scss";
import Profile from "./components/Profile";
import avatar from "./assets/pfp.jpg";

export default function App() {
	const name = "Rafael Mineti";
	const bio = "Fullstack Developer";
	const email = "rafael_minetti@hotmail.com";
	const phone = "+5519993115115";
	const githubUrl = "https://github.com/minettii/";
	const linkedinUrl = "https://www.linkedin.com/in/rafael-minetti-9b8300345/";
	const twitterUrl = "https://x.com";

	return (
		<>
			<Profile
				avatar={avatar}
				bio={bio}
				email={email}
				githubUrl={githubUrl}
				linkedinUrl={linkedinUrl}
				name={name}
				phone={phone}
				twitterUrl={twitterUrl}
			/>
		</>
	);
}
