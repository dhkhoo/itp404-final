import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Root from "../routes/Root.js";
// set up data to pass as props

test("Navbar Renders", () => {
	const { getAllByTestId } = render(
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	);

	expect(getAllByTestId("catalogue")[0]).toBeTruthy();
});

test("Clicking on Brand takes you to catalogue", () => {
	const { getAllByTestId } = render(
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	);

	expect(getAllByTestId("catalogue")[0]).toBeTruthy();
	fireEvent.click(getAllByTestId("catalogue")[0]);
	expect(window.location.href).toBe("http://localhost/");
});

test("Clicking on Favorites takes you to favorites", () => {
	const { getAllByTestId } = render(
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	);

	expect(getAllByTestId("favorites")[0]).toBeTruthy();
	fireEvent.click(getAllByTestId("favorites")[0]);
	expect(window.location.href).toBe("http://localhost/favorites");
});
