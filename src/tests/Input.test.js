import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DropdownInput from "../inputComponents/Dropdown";
import TextAreaInput from "../inputComponents/TextAreaInput";
import TextInput from "../inputComponents/TextInput";

test("Dropdown Input Renders", () => {
	const one = "";

	const { getAllByTestId } = render(
		<BrowserRouter>
			<DropdownInput
				label="Product Type"
				id="type"
				value={one}
				options={[
					{ value: "", label: "--Product Type--" },
					{ value: "Face", label: "Face" },
					{ value: "Eye", label: "Eye" },
					{ value: "Lip", label: "Lip" },
					{ value: "Cheek", label: "Cheek" },
				]}
				onChange={() => {}}
				feedback="Please select a product type."
			/>
		</BrowserRouter>
	);

	expect(getAllByTestId("dropdown")[0]).toBeTruthy();
});

test("Textinput Renders", () => {
	const two = "";
	const { getAllByTestId } = render(
		<BrowserRouter>
			<TextInput
				type="text"
				label="Brand"
				id="brand"
				value={two}
				placeholder="stila"
				onChange={() => {}}
				feedback="Please provide a brand name."
			/>
		</BrowserRouter>
	);

	expect(getAllByTestId("text-input")[0]).toBeTruthy();
});

test("Textarea Renders", () => {
	const three = "";
	const { getAllByTestId } = render(
		<BrowserRouter>
			<TextAreaInput
				label="Notes"
				id="notes"
				placeholder="Comments on the product"
				className="form-control"
				value={three}
				onChange={() => {}}
			/>
		</BrowserRouter>
	);

	expect(getAllByTestId("text-area")[0]).toBeTruthy();
});
