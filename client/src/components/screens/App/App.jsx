import { Routes, Route } from "react-router-dom";

import Auth from "../Auth/Auth";
import { useAuth } from "../../../providers/AuthProvider";

import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Home from "../Home/Home";
import CardInfo from "../Home/PasswordCard/CardInfo/CardInfo";
import PasswordGenerator from "../PasswordGenerator/PasswordGenerator";
import PageNotFound from "../PageNotFound/PageNotFound";

const userData = [
	{
		id: 1,
		title: "Facebook",
		username: "facebookEmail@test.com",
		website: "https://www.facebook.com",
		password: "qwerty",
	},
	{
		id: 2,
		title:
			"TelegramasoidasoidoasouisaoiuuoidoiuasdiouTelegramasoidasoidoasouisaoiuuoidoiuasdiouTelegramasoidasoidoasouisaoiuuoidoiuasdiouTelegramasoidasoidoasouisaoiuuoidoiuasdiouTelegramasoidasoidoasouisaoiuuoidoiuasdiou",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 3,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 4,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 5,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 6,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 7,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 8,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 9,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 10,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 11,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 12,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 13,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 14,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 15,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 16,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
	{
		id: 17,
		title: "Telegram",
		username: "+79998887213",
		website: "https://www.telegram.ru",
		password: "asdklfl",
	},
];

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
							<Home userData={userData} />
						</>
					}
				/>
				<Route
					path="/card-info/:id"
					element={
						<>
							<Header page="/card-info" />
							<CardInfo data={userData} />
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
