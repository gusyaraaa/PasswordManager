import { Routes, Route } from "react-router-dom";

import Auth from "../Auth/Auth";
import { useAuth } from "../../../providers/AuthProvider";

import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Home from "../Home/Home";
import CardInfo from "../Home/PasswordCard/CardInfo/CardInfo";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";
import PageNotFound from "../PageNotFound/PageNotFound";

const App = () => {
	const { user } = useAuth();

	return user ? (
		<main style={{ paddingTop: "140px", paddingBottom: "77px" }}>
			<Navigation />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Header page="/" />
							<Home />
						</>
					}
				/>
				<Route
					path="/card-info"
					element={
						<>
							<Header page="/card-info" />
							<CardInfo />
						</>
					}
				/>
				<Route
					path="/password-generator"
					element={
						<>
							<Header page="/password-generator" />
							<PasswordGenerator />
						</>
					}
				/>

				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</main>
	) : (
		<Auth />
	);
};

export default App;
