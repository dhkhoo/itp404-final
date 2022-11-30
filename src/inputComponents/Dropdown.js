export default function DropdownInput(props) {
  return (
    <>
      <div className="mb-3">
        <label className="form-label" htmlFor={props.id}>
          {props.label}
        </label>
        <select
          className="form-select"
          id={props.id}
          name={props.id}
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={(event) => {
            props.onChange(event.target.value);
          }}
        >
          {props.options.map((option) => {
            return (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
