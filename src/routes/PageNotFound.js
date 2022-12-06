import { useEffect } from "react";

export default function PageNotFound() {
	useEffect(() => {
		document.title = "404 Page Not Found";
	}, []);

	return (
		<div className="container">
			<h1 data-testid="page-not-found">Page Not Found</h1>
			<h2>
				Return to <a href="/">Home</a>
			</h2>
		</div>
	);
}
