import moment from "moment";
import { useEffect, useState } from "react";
import { Form, useLoaderData, useSubmit } from "react-router-dom";
import DropdownInput from "../inputComponents/Dropdown";
import TextAreaInput from "../inputComponents/TextAreaInput";
import TextInput from "../inputComponents/TextInput";

export default function EditProduct() {
	useEffect(() => {
		document.title = "Edit Product Page";
	}, []);

	const product = useLoaderData();
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
		}
	}, [validate]);

	return (
		<div className="container">
			<Form
				id="entire-form"
				onSubmit={HandleSubmit}
				method="post"
				noValidate>
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
									placeholder="Stay All Day Waterproof Liquid Eyeliner"
									onChange={(newProductName) => {
										setProductName(newProductName);
									}}
									feedback="Please provide a product name."
								/>
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
									feedback="Please provide a brand name."
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
							defaultValue={variant}
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
							defaultValue={price}
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
							defaultValue={expiryLength}
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
							defaultValue={dateOpened}
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
						defaultValue={notes}
						onChange={(newNotes) => {
							setNotes(newNotes);
						}}
					/>
				</div>

				<button
					type="submit"
					className="btn btn-primary">
					Submit
				</button>
			</Form>
		</div>
	);
}
