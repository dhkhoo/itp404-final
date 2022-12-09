export default function List(props) {
	const listInfo = props.listInfo;
	const listItems = [];

	for (let i = 0; i < listInfo.length; i++) {
		const listId = listInfo[i].id;
		listItems.push(
			<ListItem
				key={listId}
				id={listId}
				listInfo={listInfo[i]}
				checked={props.listData[listId]}
				onChange={(newCheck) => {
					props.onChange(newCheck, listId);
				}}
				style={props.style}
				classNames={props.classNames}
			/>
		);
	}

	return <> {listItems} </>;
}

function ListItem(props) {
	return (
		<div
			style={props.style}
			className={props.classNames}>
			<div className="form-check">
				<input
					className="form-check-input"
					type="checkbox"
					id={props.id}
					checked={props.checked}
					onChange={(event) => {
						props.onChange(event.target.checked);
					}}
				/>
				<label
					className="form-check-label row"
					htmlFor={props.id}>
					<div className="col-5">
						<h5>{props.listInfo.productName}</h5>
					</div>
					<div className="col-4">
						<p>{props.listInfo.brand}</p>
					</div>
					<div className="col-3">
						<p>Date Added: {props.listInfo.dateAdded}</p>
					</div>
				</label>
			</div>
		</div>
	);
}
