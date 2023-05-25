import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { RiCheckLine } from "react-icons/ri";

export const CopyButton = ({ item }) => {
	const [isCopy, setCopy] = useState(false);

	const copyContent = async (content, ms) => {
		if (!isCopy) {
			setCopy(true);
			navigator.clipboard.writeText(item[content]);

			await (() => {
				return new Promise((resolve) => setTimeout(resolve, ms));
			})();

			setCopy(false);
		}
	};

	const copy = {
		email: (ms) => copyContent("email", ms),
		password: (ms) => copyContent("password", ms)
	}

	return (
		<div className="password-card__button" onClick={() => copy.password(1100)}>
				{isCopy ? (
					<RiCheckLine className={`${isCopy ? "show" : ""}`} style={{ color: "rgb(13, 190, 13)" }} />
				) : (
					<MdOutlineContentCopy />
				)}
		</div>
	)
} 