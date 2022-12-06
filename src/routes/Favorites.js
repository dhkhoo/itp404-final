import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faBox, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CatalogueItem from "../CatalogueItem";

export default function Favorites() {
	useEffect(() => {
		document.title = "Favorites Page";
		document.getElementById("favorites").style.color = "white !important";
	}, []);

	const defaultImage =
		"https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

	const catalogue = useLoaderData();
	const favorites = catalogue.filter((products) => {
		return products.favorite === true;
	});
	return (
		<div className="container">
			<h1>
				Favorites{" "}
				<FontAwesomeIcon
					icon={faHeart}
					color="#e5989b"
					size="1x"
				/>
			</h1>
			<div>
				{favorites.map((item) => {
					const openTime = moment(item.open);
					return (
						<CatalogueItem
							classes="favorite product row"
							item={item}
							key={item.id}>
							<div className="col-2">
								<p>
									<FontAwesomeIcon icon={faClock} />{" "}
									{item.expiry ? item.expiry + " months" : "No Expiry Date"}
								</p>
								<p>
									<FontAwesomeIcon icon={faBox} /> {item.type}{" "}
								</p>
							</div>
							<div className="col-3">
								<p>
									{item.open
										? "Product Opened: " + item.open
										: "Product Unopened"}
								</p>
								<p>
									{moment(item.open).isValid()
										? "Product Expiry: " +
										  openTime.add(item.expiry, "M").format("MM-DD-YYYY")
										: ""}
								</p>
							</div>
							<div className="col-3 line">
								<p>Added to Favorites: {item.dateFavorited}</p>
							</div>
							<div className="col-3">
								<img
									className="makeup-class"
									src={item.imageLink ? item.imageLink : defaultImage}
									alt="linked makeup"
								/>
							</div>
						</CatalogueItem>
					);
				})}
			</div>
		</div>
	);
}
