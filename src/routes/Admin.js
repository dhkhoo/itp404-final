import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteProduct } from "../api.js";
import List from "../List.js";

export default function Admin() {
	const list = useLoaderData();
	const [listInfo, setListInfo] = useState(list);
	const [listData, setListData] = useState([]);
	const [hasCompleted, setHasCompleted] = useState(false);
	const [isIndeterminate, setIndeterminate] = useState(false);
	const [numberChecked, setNumberChecked] = useState(0);
	const [checkAll, setCheckAll] = useState(false);
	const checkboxRef = useRef();

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

	useEffect(() => {
		checkboxRef.current.indeterminate = isIndeterminate;
	}, [isIndeterminate]);

	useEffect(() => {
		if (numberChecked > 0 && numberChecked < listData.length) {
			setIndeterminate(true);
		} else {
			if (numberChecked === listData.length) {
				setCheckAll(true);
			}
			setIndeterminate(false);
		}
	}, [numberChecked]);

	useEffect(() => {
		const copy = listData.map((item) => {
			return { id: item.id, checked: checkAll };
		});
		setListData(copy);
		setNumberChecked(copy.filter((a) => a.checked === true).length);
	}, [checkAll]);

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

		setNumberChecked(copy.filter((a) => a.checked === true).length);
	}

	// delete all selected items
	function BulkDelete() {
		const promiseArray = [];
		let copyData = listData;
		let copyInfo = listInfo;

		let i = 0;
		copyData.forEach((product) => {
			if (product.checked) {
				i++;
				copyData = copyData.filter((a) => a.id !== product.id);
				copyInfo = copyInfo.filter((a) => a.id !== product.id);
				promiseArray.push(deleteProduct(product.id));
			}
		});

		setListData(copyData);
		setListInfo(copyInfo);

		Promise.all(promiseArray).then(() => {
			toast.success("You've successfully removed " + i + " products.");
		});
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
					{numberChecked > 0 ? (
						<button
							onClick={BulkDelete}
							type="button"
							className="btn btn-danger">
							Remove Product
						</button>
					) : (
						<button
							onClick={BulkDelete}
							type="button"
							className="btn btn-danger"
							disabled>
							Remove Product
						</button>
					)}
				</div>
			</div>
			<div className="form-check left-space">
				<input
					className="form-check-input"
					id="select-all"
					type="checkbox"
					ref={checkboxRef}
					checked={checkAll}
					onChange={() => {
						setCheckAll(!checkAll);
					}}
				/>
				<label
					className="form-check-label"
					htmlFor="select-all">
					Select All
				</label>
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
