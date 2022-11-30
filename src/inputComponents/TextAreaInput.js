export default function TextAreaInput(props) {
  return (
    <>
      <div className="mb-3">
        <label className="col-form-label" htmlFor={props.id}>
          {props.label}
        </label>
        <textarea
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
      </div>
    </>
  );
}
