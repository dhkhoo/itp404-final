import moment from "moment";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import EmptyHeart from "./EmptyHeart";
import FilledHeart from "./FilledHeart";

export default function CatalogueItem(props) {
  const [favorite, setFavorite] = useState(props.item.favorite);

  return (
    <div className="row product">
      <div className="row">
        <div className="col-11">
          <h5>{props.item.productName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.item.brand}</h6>
        </div>
        <div className="col-1">
          <Form method="POST" action={`/products/${props.item.id}/favorite`}>
            <input type="hidden" name="favorite" value={favorite} />
            <input
              type="hidden"
              name="dateFavorited"
              value={moment().format("MM-DD-YYYY")}
            />
            <button
              type="submit"
              className="btn btn-link"
              onClick={() => {
                setFavorite(!favorite);
              }}
            >
              {favorite ? <FilledHeart /> : <EmptyHeart />}
            </button>
          </Form>
        </div>
      </div>
      <div className="row">
        {props.children}
        <div className="col">
          <Link
            className="btn btn-primary right-space"
            to={`/products/${props.item.id}`}
          >
            View More Details
          </Link>
          <Link
            className="btn btn-warning"
            to={`/products/${props.item.id}/edit`}
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
