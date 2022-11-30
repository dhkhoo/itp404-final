/*import moment from "moment";
import { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import DropdownInput from "../inputComponents/Dropdown";
import TextAreaInput from "../inputComponents/TextAreaInput";
import TextInput from "../inputComponents/TextInput";
import Modal from "../Modal";

export default function AddProduct() {
  useEffect(() => {
    document.title = "Add New Product Page";
  }, []);

  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [productName, setProductName] = useState("");
  const [type, setType] = useState("");
  const [variant, setVariant] = useState("");
  const [notes, setNotes] = useState("");
  const [dateOpened, setDateOpened] = useState("");
  const [expiryLength, setExpiryLength] = useState("");
  const [link, setLink] = useState("");
  const [imageLink, setImageLink] = useState("");

  const defaultImage =
    "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

  // TODO: validate the form

  return (
    <div className="container">
      <Form id="entire-form" method="post" noValidate>
        <div className="row">
          <div className="col-9">
            <h1>Add Product</h1>
            <div className="row">
              <div className="col-6">
                <TextInput
                  type="text"
                  label="Product Name"
                  id="name"
                  value={productName}
                  placeholder="Stay All Day Waterproof Liquid Eyeliner"
                  onChange={(newProductName) => {
                    setProductName(newProductName);
                  }}
                />
                <div id="name-feedback" className="invalid-feedback">
                  Please provide a product name.
                </div>
              </div>
              <div className="col-6">
                <TextInput
                  type="text"
                  label="Brand"
                  id="brand"
                  value={brand}
                  placeholder="stila"
                  onChange={(newBrand) => {
                    setBrand(newBrand);
                  }}
                />
              </div>
            </div>
            <TextInput
              type="text"
              label="Product Link"
              id="link"
              value={link}
              placeholder=""
              onChange={(newLink) => {
                setLink(newLink);
              }}
            />

            <TextInput
              type="text"
              label="Image Link"
              id="image-link"
              value={imageLink}
              placeholder=""
              onChange={(newImageLink) => {
                setImageLink(newImageLink);
              }}
            />
          </div>
          <div className="col-3">
            <img
              id="makeup-img"
              src={imageLink ? imageLink : defaultImage}
              alt="linked makeup"
            />
          </div>
        </div>

        <div className="my-3 row">
          <div className="col-4">
            <DropdownInput
              label="Product Type"
              id="type"
              value={type}
              options={[
                { value: "", label: "--Select Product Type--" },
                { value: "Face", label: "Face" },
                { value: "Eye", label: "Eye" },
                { value: "Lip", label: "Lip" },
                { value: "Cheek", label: "Cheek" }
              ]}
              onChange={(newType) => {
                setType(newType);
              }}
            />
          </div>
          <div className="col-4">
            <TextInput
              type="text"
              label="Variant"
              id="variant"
              value={variant}
              placeholder="Grapefruit"
              onChange={(newVariant) => {
                setVariant(newVariant);
              }}
            />
          </div>
          <div className="col-4">
            <TextInput
              type="text"
              label="Price"
              id="price"
              value={price}
              placeholder="$10.99"
              onChange={(newPrice) => {
                setPrice(newPrice);
              }}
            />
          </div>
        </div>

        <div className="my-3 row">
          <div className="col-6">
            <TextInput
              type="text"
              label="Expiry Length (months)"
              id="expiry"
              value={expiryLength}
              placeholder="12"
              onChange={(newExpiry) => {
                setExpiryLength(newExpiry);
              }}
            />
          </div>
          <div className="col-6">
            <TextInput
              type="text"
              label="Open Date (N/A if unopened)"
              id="open"
              value={dateOpened}
              placeholder={moment().format("MM-DD-YYYY")}
              onChange={(newDateOpened) => {
                setDateOpened(newDateOpened);
              }}
            />
          </div>
        </div>

        <div className="my-3 row">
          <TextAreaInput
            label="Notes"
            id="notes"
            placeholder="Comments on the product"
            className="form-control"
            value={notes}
            onChange={(newNotes) => {
              setNotes(newNotes);
            }}
          />
        </div>

        <input
          type="text"
          label="add"
          id="add"
          hidden
          defaultValue={moment().format("MM-DD-YYYY")}
        />

        <input
          type="text"
          label="favorite"
          id="favorite"
          hidden
          defaultValue={false}
        />

        <input
          type="text"
          label="dateAdded"
          id="dateAdded"
          hidden
          defaultValue={null}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
}*/
