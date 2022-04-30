import { Link } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
	return (
		<div className="page-not-found">
			<div className="noise"></div>
			<div className="overlay"></div>
			<div className="terminal">
				<h1>
					Error <span className="errorcode">404</span>
				</h1>
				<p className="output">
					The page you are looking for might have been removed, had its name changed or is temporarily unavailable.
				</p>
				<p className="output">
					<Link className="link" to="/">
						Return to the homepage
					</Link>
					.
				</p>
				<p className="output">Good luck.</p>
			</div>
		</div>
	);
};

export default PageNotFound;
