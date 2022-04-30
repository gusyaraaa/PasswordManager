import "./PasswordCard.scss";

import { MdContentCopy } from "react-icons/md";

const PasswordCard = ({ data }) => {
	return (
		<div className="password-card">
			<div className="password-card__info">
				<h3 className="password-card__info-title">
					{data.title}
					<span>.{data.website.split(".").slice(-1)}</span>
				</h3>
				<p className="password-card__info-username">{data.username}</p>
			</div>
			<div className="password-card__button" onClick={() => navigator.clipboard.writeText(data.password)}>
				<MdContentCopy />
			</div>
		</div>
	);
};

export default PasswordCard;
