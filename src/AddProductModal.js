import moment from "moment";
import { useState } from "react";
import ReactDom from "react-dom";
import { Form } from "react-router-dom";
import DropdownInput from "./inputComponents/Dropdown";
import TextAreaInput from "./inputComponents/TextAreaInput";
import TextInput from "./inputComponents/TextInput";

export default function AddProduct(props) {
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

  return ReactDom.createPortal(
    <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Product</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={props.onClose}
            ></button>
          </div>
          <div className="modal-body">
            <Form
              id="entire-form"
              method="post"
              action="/products/addProduct"
              noValidate
              onSubmit={props.onClose}
            >
              <div className="row">
                <div className="col-9">
                  <div className="row">
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
        </div>
      </div>
    </div>,
    document.getElementById("modal-container")
  );
}
