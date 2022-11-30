import moment from "moment";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { updateFavorite } from "../api";
import EmptyHeart from "../EmptyHeart";
import FilledHeart from "../FilledHeart";

export default function ProductDetails() {
  const product = useLoaderData();
  const openTime = moment(product.open);
  console.log(product);

  useEffect(() => {
    document.title = product.productName;
  }, []);

  const defaultImage =
    "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>{product.productName}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <h2>{product.brand}</h2>
          <div className="features">
            <span className="tags">{product.type}</span>
            <span className="tags">${product.price}</span>
            <span className="tags">{product.variant}</span>
            <span className="tags">{product.expiry} months</span>
          </div>

          <div className="row top-space">
            <h3>Dates</h3>
            <div className="col-4">
              <span>Added to Catalogue</span>
              <br />
              <span>{product.dateAdded}</span>
            </div>
            <div className="col-4">
              <span>Product Opened</span>
              <br />
              <span>{product.open}</span>
            </div>
            <div className="col-4">
              <span>Product Expiry</span>
              <br />
              <span>
                {moment(product.open).isValid()
                  ? openTime.add(product.expiry, "M").format("MM-DD-YYYY")
                  : "N/A"}
              </span>
            </div>
          </div>

          <div className="row top-space">
            <h3>Notes</h3>
            <p>{product.notes}</p>
          </div>

          <div className="row">
            <div className="col-2">
              <a
                type="button"
                className="btn btn-primary"
                href={product.link}
                target="_blank"
                rel="noreferrer"
              >
                Product Source
              </a>
            </div>
            <div className="col-3">
              <Form method="POST" action={`/products/${product.id}/destroy`}>
                <button type="submit" className="btn btn-danger">
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
