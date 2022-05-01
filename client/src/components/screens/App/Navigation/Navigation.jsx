import { Link } from "react-router-dom";
import "./Navigation.scss";

import { BiLockAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiShieldKeyholeLine, RiUser3Line } from "react-icons/ri";

const Navigation = () => {
	const icons = {
		"/password-generator": <BiLockAlt />,
		"/settings": <IoSettingsOutline />,
		"/": <RiShieldKeyholeLine className="nav__home" />,
		"/profile": <RiUser3Line />,
		"/inbox": <IoMdNotificationsOutline />,
	};

	return (
		<nav className="nav">
			<div className="wrapper" onClick={(event) => {}}>
				{Object.entries(icons).map(([key, value]) => (
					<Link to={key} key={key}>
						{value}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navigation;
