import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CatalogueItem from "../CatalogueItem";

export default function Favorites() {
  useEffect(() => {
    document.title = "Favorites Page";
  }, []);

  const catalogue = useLoaderData();
  const favorites = catalogue.filter((products) => {
    return products.favorite === true;
  });
  return (
    <div className="container">
      <h1>Favorites</h1>
      <div>
        {favorites.map((item) => {
          return (
            <CatalogueItem item={item} key={item.id}>
              <p>Product Expiry Length: {item.expiry} Months</p>
              <p>Product Opened: {item.open ? item.open : "N/A"}</p>
              <p>Added to Favorites: {item.dateFavorited}</p>
            </CatalogueItem>
          );
        })}
      </div>
    </div>
  );
}
