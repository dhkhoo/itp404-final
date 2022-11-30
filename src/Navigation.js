import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddProduct from "./AddProductModal";

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Makeup Catalogue
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/favorites" className="nav-link">
                Favorites
              </Link>
            </li>
            <li className="nav-item me-auto">
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  Add New Product
                </button>

                {isModalOpen && (
                  <AddProduct
                    title="My modal title"
                    body={() => {
                      return <p>Modal body text goes here.</p>;
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
