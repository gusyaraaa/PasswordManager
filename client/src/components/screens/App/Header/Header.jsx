import "./Header.scss";

import { BsArrowLeft, BsPlusCircle } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { Link } from "react-router-dom";

const Header = ({ page }) => {
	const iconsHandler = {
		"/": {
			backBtn: <CgLogOut />,
			pageBtn: <BsPlusCircle />,
		},
		"/card-info": {
			backBtn: (
				<Link to="/">
					<BsArrowLeft />
				</Link>
			),
			pageBtn: <MdOutlineDeleteOutline />,
		},
		"/password-generator": {
			backBtn: (
				<Link to="/">
					<BsArrowLeft />
				</Link>
			),
			pageBtn: null,
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
