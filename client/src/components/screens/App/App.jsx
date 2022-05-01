import { Routes, Route } from "react-router-dom";

import Auth from "../Auth/Auth";
import { useAuth } from "../../../providers/AuthProvider";

import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Home from "../Home/Home";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";
import PageNotFound from "../PageNotFound/PageNotFound";

const App = () => {
	const { user } = useAuth();

	return user ? (
		<>
			<Header page="/" />
			<main style={{ paddingTop: "150px", paddingBottom: "77px" }}>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/password-generator" element={<PasswordGenerator />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</main>
		</>
	) : (
		<Auth />
	);
};

export default App;
