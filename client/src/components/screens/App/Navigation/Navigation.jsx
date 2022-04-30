import { Link } from "react-router-dom";
import "./Navigation.scss";

import { BiLockAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiShieldKeyholeLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

const Navigation = () => {
	return (
		<nav className="nav">
			<div
				className="wrapper"
				onClick={(event) => {
					event.target.classList.add("active");
					return;
				}}
			>
				<Link to="/vault">
					<BiLockAlt />
				</Link>
				<Link to="/settings">
					<IoSettingsOutline />
				</Link>
				<Link to="/">
					<RiShieldKeyholeLine className="nav__home active" />
				</Link>
				<Link to="/profile">
					<FiUser />
				</Link>
				<Link to="/inbox">
					<IoMdNotificationsOutline />
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;