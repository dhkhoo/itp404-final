import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CatalogueItem from "../CatalogueItem";

import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export default function Index() {
	useEffect(() => {
		document.title = "Catalogue Page";
	}, []);

	const catalogue = useLoaderData();
	//console.log(catalogue);

	return (
		<div className="container">
			<h1>Catalogue</h1>
			<div>
				{catalogue.map((item) => {
					const openTime = moment(item.open);
					return (
						<CatalogueItem
							classes="product row"
							item={item}
							key={item.id}>
							<div className="col">
								<p>
									<FontAwesomeIcon icon={faClock} />{" "}
									{item.expiry ? item.expiry + " months" : "No Expiry Date"}
								</p>
								<p>
									<FontAwesomeIcon icon={faBox} /> {item.type}{" "}
								</p>
							</div>
							<div className="col">
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
						</CatalogueItem>
					);
				})}
			</div>
		</div>
	);
}
