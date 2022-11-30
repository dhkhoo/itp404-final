import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CatalogueItem from "../CatalogueItem";

import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Index() {
  useEffect(() => {
    document.title = "Catalogue Page";
  }, []);

  const catalogue = useLoaderData();
  console.log(catalogue);

  return (
    <div className="container">
      <h1>Catalogue</h1>
      <div>
        {catalogue.map((item) => {
          return (
            <CatalogueItem item={item} key={item.id}>
              <p>Product Expiry Length: {item.expiry} Months</p>
              <p>Product Opened: {item.open ? item.open : "N/A"}</p>
            </CatalogueItem>
          );
        })}
      </div>
    </div>
  );
}
