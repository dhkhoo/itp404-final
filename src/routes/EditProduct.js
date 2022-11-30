import moment from "moment";
import { useEffect, useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
import DropdownInput from "../inputComponents/Dropdown";
import TextAreaInput from "../inputComponents/TextAreaInput";
import TextInput from "../inputComponents/TextInput";

export default function EditProduct() {
  useEffect(() => {
    document.title = "Edit Product Page";
  }, []);

  const product = useLoaderData();
  console.log(product);
  const defaultImage =
    "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg";

  const [price, setPrice] = useState(product.price);
  const [brand, setBrand] = useState(product.brand);
  const [productName, setProductName] = useState(product.productName);
  const [type, setType] = useState(product.type);
  const [variant, setVariant] = useState(product.variant);
  const [notes, setNotes] = useState(product.notes);
  const [dateOpened, setDateOpened] = useState(product.open);
  const [expiryLength, setExpiryLength] = useState(product.expiry);
  const [link, setLink] = useState(product.link);
  const [imageLink, setImageLink] = useState(product.imageLink);

  // TODO: validate the form

  return (
    <div className="container">
      <Form id="entire-form" method="post" noValidate>
        <div className="row">
          <div className="col-9">
            <h1>Edit Product</h1>
            <div className="row">
              <div className="col-6">
                <TextInput
                  type="text"
                  label="Product Name"
                  id="name"
                  defaultValue={productName}
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
                  defaultValue={brand}
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
              defaultValue={link}
              onChange={(newLink) => {
                setLink(newLink);
              }}
            />

            <TextInput
              type="text"
              label="Image Link"
              id="image-link"
              defaultValue={imageLink}
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
              defaultValue={type}
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
              defaultValue={variant}
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
              defaultValue={price}
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
              defaultValue={expiryLength}
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
              defaultValue={dateOpened}
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
            defaultValue={notes}
            onChange={(newNotes) => {
              setNotes(newNotes);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
}
