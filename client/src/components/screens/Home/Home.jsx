import { useRef, useState } from "react";
import "./Home.scss";

import PasswordCard from "./PasswordCard/PasswordCard";

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

const Home = () => {
	const [data, setData] = useState(userData);
	const searchValue = useRef(null);

	const findCards = (wordToMatch, cards) => {
		const re = new RegExp(`${[wordToMatch]}`, "ig");
		return cards.filter((card) => card.title.match(re) || card.username.match(re));
	};

	return (
		<section className="home">
			<h2 className="home__title">Your passwords</h2>
			<input
				type="search"
				className="home__search"
				ref={searchValue}
				placeholder="Search..."
				onChange={() => setData(findCards(searchValue.current.value, userData))}
			/>
			<p className="home__passwords-info">
				Stored passwords: <span className="home__passwords-info_data">{data.length}</span>
			</p>
			<div className="home__passwords">
				{data.map((elem) => (
					<PasswordCard item={elem} data={data} setData={setData} key={elem.id} />
				))}
			</div>
		</section>
	);
};

export default Home;
