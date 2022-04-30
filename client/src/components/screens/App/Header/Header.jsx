import "./Header.scss";

import { BsArrowLeft, BsPlusCircle } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";

const Header = ({ page }) => {
	const iconsHandler = {
		"/": {
			backBtn: <CgLogOut />,
			pageBtn: <BsPlusCircle />,
		},
		AnotherPage: {
			backBtn: <BsArrowLeft />,
			pageBtn: <BsPlusCircle />,
		},
	};

	return (
		<header className="header">
			<div className="wrapper">
				<div className="header__back-btn">{iconsHandler[page].backBtn}</div>
				<h1 className="header__title">Password Manager</h1>
				<div className="header__page-btn">{iconsHandler[page].pageBtn}</div>
			</div>
		</header>
	);
};

export default Header;
