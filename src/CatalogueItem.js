import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { updateFavorite } from "./api";
import EmptyHeart from "./EmptyHeart";
import FilledHeart from "./FilledHeart";

export default function CatalogueItem(props) {
	const currentFavorite = <FilledHeart />;
	const notFavorite = <EmptyHeart />;
	const [favorite, setFavorite] = useState(props.item.favorite);
	//console.log(props);

	const toggleFavorite = () => {
		updateFavorite(
			props.item.id,
			!favorite,
			moment().format("MM-DD-YYYY")
		).then(() => {
			toast.success("You've updated your favorites");
			setFavorite(!favorite);
		});
	};

	return (
		<div className={props.classes}>
			<div className="row">
				<div className="col-11">
					<h5 data-testid="product-name">{props.item.productName}</h5>
					<h6
						className="card-subtitle mb-2 text-muted"
						data-testid="brand">
						{props.item.brand}
					</h6>
				</div>
				<div className="col-1">
					<button
						type="btn"
						className="btn btn-link"
						onClick={toggleFavorite}
						data-testid="heart-button">
						{favorite ? currentFavorite : notFavorite}
					</button>
				</div>
			</div>
			<div className="row">{props.children}</div>
			<div className="row">
				<div>
					<Link
						className="btn btn-primary right-space"
						to={`/products/${props.item.id}`}
						data-testid="product-link">
						View More Details
					</Link>
					<Link
						className="btn btn-warning"
						to={`/products/${props.item.id}/edit`}
						data-testid="edit-link">
						Edit
					</Link>
				</div>
			</div>
		</div>
	);
}
