import { useState } from "react";
import { Link } from "react-router-dom";
import "./PasswordCard.scss";

import { MdOutlineContentCopy, MdOutlineDeleteOutline, MdOutlineInfo } from "react-icons/md";
import { RiCheckLine } from "react-icons/ri";

const PasswordCard = ({ item, data, setData }) => {
	const [isCopy, setCopy] = useState(false);

	const copyPassword = async (ms) => {
		if (!isCopy) {
			setCopy(true);
			navigator.clipboard.writeText(data.password);

			await (() => {
				return new Promise((resolve) => setTimeout(resolve, ms));
			})();

			setCopy(false);
		}
	};

	const deleteCard = (_id) => {
		setData(data.filter((elem) => elem.id !== _id));
	};

	return (
		<div className="password-card">
			<div className="password-card__info">
				<h3 className="password-card__info-title">
					{item.title}
					<span>.{item.website.split(".").slice(-1)}</span>
				</h3>
				<p className="password-card__info-username">{item.username}</p>
			</div>

			<div className="password-card__button" onClick={() => deleteCard(item.id)}>
				<MdOutlineDeleteOutline />
			</div>
			<div className="password-card__button">
				<Link to="/card-info">
					<MdOutlineInfo />
				</Link>
			</div>
			<div className="password-card__button" onClick={() => copyPassword(1100)}>
				{isCopy ? (
					<RiCheckLine className={`${isCopy ? "show" : ""}`} style={{ color: "rgb(13, 190, 13)" }} />
				) : (
					<MdOutlineContentCopy />
				)}
			</div>
		</div>
	);
};

export default PasswordCard;
