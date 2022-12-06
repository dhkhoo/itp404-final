import { useState } from "react";
import { Link } from "react-router-dom";
import AddProduct from "./AddProductModal";

export default function Navigation() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<nav className="navbar navbar-expand-sm navbar-dark">
			<div className="container-fluid">
				<Link
					to="/"
					className="navbar-brand"
					data-testid="catalogue">
					Makeup Catalogue
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								to="/favorites"
								id="favorites"
								className="nav-link"
								data-testid="favorites">
								Favorites
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<div>
								<button
									type="button"
									className="btn btn-primary"
									data-testid="open-modal"
									onClick={() => {
										setIsModalOpen(true);
									}}>
									Add New Product
								</button>

								{isModalOpen && (
									<AddProduct
										title="My modal title"
										body={() => {
											return <p></p>;
										}}
										onClose={() => {
											setIsModalOpen(false);
										}}
									/>
								)}
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
