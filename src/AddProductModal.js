import moment from "moment";
import { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { Form, useSubmit } from "react-router-dom";
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

	const submit = useSubmit();
	const [validate, setValidate] = useState(false);

	function HandleSubmit(event) {
		event.preventDefault();
		setValidate(true);
		if (productName.length === 0) {
			document.getElementById("name").classList.add("is-invalid");
			setValidate(false);
		} else {
			document.getElementById("name").classList.remove("is-invalid");
		}

		if (brand.length === 0) {
			document.getElementById("brand").classList.add("is-invalid");
			setValidate(false);
		} else {
			document.getElementById("brand").classList.remove("is-invalid");
		}

		if (type.length === 0) {
			document.getElementById("type").classList.add("is-invalid");
			setValidate(false);
		} else {
			document.getElementById("type").classList.remove("is-invalid");
		}

		const validPrice = new RegExp(`\\d{1,3}(?:[.,]\\d{3})*(?:[.,]\\d{2})`, "g");
		if (price.length === 0 || !validPrice.test(price)) {
			document.getElementById("price").classList.add("is-invalid");
			setValidate(false);
		} else {
			document.getElementById("price").classList.remove("is-invalid");
		}

		const validExpiry = new RegExp("^[1-9]\\d*$", "g");
		if (expiryLength.length > 0 && !validExpiry.test(expiryLength)) {
			document.getElementById("expiry").classList.add("is-invalid");
			setValidate(false);
		} else {
			document.getElementById("expiry").classList.remove("is-invalid");
		}

		const validDate = new RegExp(
			"(?<=\\D|^)(?<month>1[0-2]|0[1-9])-(?<day>0[1-9]|[12][0-9]|(?<=11\\k<sep>|[^1][4-9]\\k<sep>)30|(?<=1[02]\\k<sep>|[^1][13578]\\k<sep>)3[01])(?<sep>[^\\w\\s])(?<year>\\d{4})(?=\\D|$)",
			"gm"
		);
		if (dateOpened.length > 0 && !validDate.test(dateOpened)) {
			document.getElementById("open").classList.add("is-invalid");
			setValidate(false);
		} else {
			document.getElementById("open").classList.remove("is-invalid");
		}
	}

	useEffect(() => {
		const form = document.getElementById("entire-form");
		if (validate) {
			submit(form);
			props.onClose();
		}
	}, [validate]);

	return ReactDom.createPortal(
		<>
			<div className="custom-modal-backdrop"></div>
			<div
				className="modal modal-lg"
				tabIndex="-1"
				data-testid="modal">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Add Product</h5>
							<button
								type="button"
								className="btn-close"
								aria-label="Close"
								onClick={props.onClose}></button>
						</div>
						<div className="modal-body">
							<Form
								id="entire-form"
								action="/products/addProduct"
								method="post"
								noValidate
								onSubmit={HandleSubmit}>
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
												feedback="Please provide a product name."
											/>
										</div>
										<div className="row">
											<TextInput
												type="text"
												label="Brand"
												id="brand"
												value={brand}
												placeholder="stila"
												onChange={(newBrand) => {
													setBrand(newBrand);
												}}
												feedback="Please provide a brand name."
											/>
										</div>
										<div className="row">
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
										</div>
										<div className="row">
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
												{ value: "", label: "--Product Type--" },
												{ value: "Face", label: "Face" },
												{ value: "Eye", label: "Eye" },
												{ value: "Lip", label: "Lip" },
												{ value: "Cheek", label: "Cheek" },
											]}
											onChange={(newType) => {
												setType(newType);
											}}
											feedback="Please select a product type."
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
											label="Price ($)"
											id="price"
											value={price}
											placeholder="10.99"
											onChange={(newPrice) => {
												setPrice(newPrice);
											}}
											feedback="Please provide a valid price."
										/>
									</div>
								</div>

								<div className="my-3 row">
									<div className="col-6">
										<TextInput
											type="text"
											label="Expiry Length"
											id="expiry"
											value={expiryLength}
											placeholder="12"
											onChange={(newExpiry) => {
												setExpiryLength(newExpiry);
											}}
											help="In months"
											feedback="Please provide a valid number."
										/>
									</div>
									<div className="col-6">
										<TextInput
											type="text"
											label="Open Date"
											id="open"
											value={dateOpened}
											placeholder={moment().format("MM-DD-YYYY")}
											onChange={(newDateOpened) => {
												setDateOpened(newDateOpened);
											}}
											help="Leave empty if unopened"
											feedback="Please provide a valid date."
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
									name="add"
									hidden
									defaultValue={moment().format("MM-DD-YYYY")}
								/>

								<button
									type="submit"
									className="btn btn-primary">
									Submit
								</button>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</>,
		document.getElementById("modal-container")
	);
}
