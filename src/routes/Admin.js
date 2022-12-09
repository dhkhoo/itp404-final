import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteProduct } from "../api.js";
import List from "../List.js";

export default function Admin() {
	const list = useLoaderData();
	const [listInfo, setListInfo] = useState(list);
	const [listData, setListData] = useState([]);
	const [hasCompleted, setHasCompleted] = useState(false);

	useEffect(() => {
		document.title = "Admin Page";
		let i = 0;
		listInfo.forEach((product) => {
			const copy = listData;
			copy[i] = { id: product.id, checked: false };
			i++;
			setListData(copy);
		});

		setHasCompleted(true);
	}, []);

	// change check status of the item
	function itemChange(newCheck, productId) {
		const copy = listData.map((item) => {
			if (item.id === productId) {
				return { id: productId, checked: newCheck };
			} else {
				return { id: item.id, checked: item.checked };
			}
		});
		setListData(copy);
	}

	// delete all selected items
	function BulkDelete() {
		let i = 0;
		listData.forEach((product) => {
			if (product.checked) {
				deleteProduct(product.id);
				i++;
				setListData(listData.filter((a) => a.id !== product.id));
				setListInfo(listInfo.filter((a) => a.id !== product.id));
			}
		});

		if (i === 0) {
			toast.error("No products checked for removal.");
		} else if (i === 1) {
			toast.success("You've successfully removed 1 product.");
		} else {
			toast.success("You've successfully removed " + i + " products.");
		}
	}

	// styling using CSS
	const listStyling = {
		padding: "10px",
		borderRadius: "0",
	};

	// styling using classes (bootstrap)
	const classNames = "border";

	return (
		<div className="container">
			<div className="row">
				<div className="col-10">
					<h1>Admin</h1>
				</div>
				<div className="col">
					<button
						onClick={BulkDelete}
						type="button"
						className="btn btn-danger">
						Remove Product
					</button>
				</div>
			</div>
			{hasCompleted ? (
				<List
					listInfo={listInfo}
					onChange={(newCheck, listId) => {
						itemChange(newCheck, listId);
					}}
					style={listStyling}
					classNames={classNames}
					listData={listData}
				/>
			) : (
				<p>Loading</p>
			)}

			<div className="bottom-space"></div>
		</div>
	);
}
