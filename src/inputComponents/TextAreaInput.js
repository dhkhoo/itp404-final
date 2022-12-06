export default function TextAreaInput(props) {
	return (
		<>
			<div className="mb-3">
				<label
					className="col-form-label"
					htmlFor={props.id}>
					{props.label}
				</label>
				<textarea
					data-testid="text-area"
					className="form-control"
					id={props.id}
					name={props.id}
					value={props.value}
					defaultValue={props.defaultValue}
					placeholder={props.placeholder}
					onChange={(event) => {
						props.onChange(event.target.value);
					}}
				/>
				<div className="form-text">{props.help}</div>
				<div
					id={props.id + "-feedback"}
					className="invalid-feedback">
					{props.feedback}
				</div>
			</div>
		</>
	);
}
