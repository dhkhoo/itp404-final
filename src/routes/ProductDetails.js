import moment from "moment";
import { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { updateFavorite } from "../api";
import EmptyHeart from "../EmptyHeart";
import FilledHeart from "../FilledHeart";

export default function ProductDetails() {
	const product = useLoaderData();
	const openTime = moment(product.open);

	useEffect(() => {
		document.title = product.brand + " - " + product.productName;
	});

	const currentFavorite = <FilledHeart />;
	const notFavorite = <EmptyHeart />;
	const [favorite, setFavorite] = useState(product.favorite);

	const toggleFavorite = () => {
		updateFavorite(product.id, !favorite, moment().format("MM-DD-YYYY")).then(
			() => {
				toast.success("You've updated your favorites");
				setFavorite(!favorite);
			}
		);
	};

	const defaultImage =
		"https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

	return (
		<div className="container">
			<div className="row">
				<div className="col-11">
					<h1>{product.productName}</h1>
				</div>
				<div className="col-1">
					<button
						type="btn"
						className="btn btn-link"
						onClick={toggleFavorite}>
						{favorite ? currentFavorite : notFavorite}
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-9">
					<h2>{product.brand}</h2>
					<div className="features">
						<span className="tags">{product.type}</span>
						<span className="tags">${product.price}</span>
						<span className="tags">{product.variant}</span>
						<span className="tags">
							{product.expiry ? product.expiry + " months" : "No Expiry Date"}
						</span>
					</div>

					<div className="row top-space">
						<h3>Dates</h3>
						<div className="col-4">
							<span>Added to Catalogue</span>
							<br />
							<span>{product.dateAdded}</span>
						</div>
						<div className="col-4">
							{product.open ? (
								<>
									<span>Product Opened</span>
									<br />
									<span>{product.open}</span>
								</>
							) : (
								<span>Product Unopened</span>
							)}
						</div>
						<div className="col-4">
							<span>
								{moment(product.open).isValid() ? (
									<>
										<span>Product Expiry</span>
										<br />
										{openTime.add(product.expiry, "M").format("MM-DD-YYYY")}
									</>
								) : (
									<span>No Expiry Date</span>
								)}
							</span>
						</div>
					</div>

					<div className="row top-space">
						<h3>Notes</h3>
						<p>
							{product.notes
								? product.notes
								: "Edit details to add notes to this product!"}
						</p>
					</div>

					<div className="row">
						<div className="col-2">
							{product.link ? (
								<a
									type="button"
									className="btn btn-primary"
									href={product.link}
									target="_blank"
									rel="noreferrer">
									Product Source
								</a>
							) : (
								<button
									type="btn"
									className="btn btn-primary"
									disabled>
									No Product Link
								</button>
							)}
						</div>
						<div className="col-3">
							<Form
								method="post"
								action={`/products/${product.id}/remove`}>
								<button
									type="submit"
									className="btn btn-danger">
									Remove Product
								</button>
							</Form>
						</div>
					</div>
				</div>

				<div className="col-3">
					<img
						id="makeup-img"
						src={product.imageLink ? product.imageLink : defaultImage}
						alt="linked makeup"
					/>
				</div>
			</div>
		</div>
	);
}
