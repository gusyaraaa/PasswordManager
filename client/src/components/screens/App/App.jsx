import Auth from "../Auth/Auth";
import { useAuth } from "../../../providers/AuthProvider";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Home from "../Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";

import { Routes, Route } from "react-router-dom";

const App = () => {
	const { user } = useAuth();

	return user ? (
		<>
			<Header page="/" />
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	) : (
		<Auth />
	);
};

export default App;
