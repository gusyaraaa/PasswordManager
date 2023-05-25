import { useRef, useState } from "react";
import "./Home.scss";

import PasswordCard from "./PasswordCard/PasswordCard";

const Home = ({ userData }) => {
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
