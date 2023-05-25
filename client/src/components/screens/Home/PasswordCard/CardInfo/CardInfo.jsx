import { useParams } from "react-router-dom";
import { CopyButton } from "../CopyButton";
import "./CardInfo.scss";

const CardInfo = ({ data }) => {
	const params = useParams();
	const card = data.find(elem => elem.id === +params.id);

	return (
		<section>
			<div className="card-info">
				<div className="card-info__title">
					<h3>
						ID / Username
					</h3>
					<p>{card.username}</p>
				</div>
				<CopyButton item={card} />
			</div>
			<div className="card-info">
				<div className="card-info__password">
					<h3>
						Password
					</h3>
					<p>{card.password}</p>
				</div>
				<CopyButton item={card} />
			</div>
			<div className="card-info">
				<div className="card-info__website">
					<h3>
						Website
					</h3>
					<p>{card.website}</p>
				</div>
				<CopyButton item={card} />
			</div>
			
		</section>
	);
};

export default CardInfo;
