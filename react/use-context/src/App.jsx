import UserInfo from "./components/UserInfo";
import UserContext from "./contexts/UserContex";

export default function App() {
	const user = {
		name: "João",
		email: "joao@email.com",
	};
	return (
		<UserContext.Provider value={user}>
			<h1>useContext</h1>
			<UserInfo />
		</UserContext.Provider>
	);
}
