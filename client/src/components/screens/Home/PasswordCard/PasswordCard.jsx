import { Link } from "react-router-dom";
import "./PasswordCard.scss";

import { MdOutlineDeleteOutline, MdOutlineInfo } from "react-icons/md";
import { CopyButton } from "./CopyButton";

const PasswordCard = ({ item, data, setData }) => {
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
				<Link to={`/card-info/${item.id}`}>
					<MdOutlineInfo />
				</Link>
			</div>
			<CopyButton item={item} />
		</div>
	);
};

export default PasswordCard;
