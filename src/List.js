export default function List(props) {
  const listInfo = props.listInfo;
  const checked = props.checked;
  //console.log(listInfo);
  const listItems = [];

  for (let i = 0; i < listInfo.length; i++) {
    listItems.push(
      <ListItem
        key={listInfo[i].id}
        id={listInfo[i].id}
        listInfo={listInfo[i]}
        checked={
          //checked[i];
          console.log(checked[i])
        }
        onCheck={(newCheck) => {
          props.setCheck({ id: listInfo[i].id, check: newCheck });
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
    <div style={props.style} className={props.classNames}>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id={props.id}
          checked={props.checked}
          onChange={(event) => {
            props.onCheck(event.target.checked);
          }}
        />
        <label className="form-check-label row" htmlFor={props.id}>
          <div className="col-5">
            <h5>{props.listInfo.productName}</h5>
          </div>
          <div className="col-4">
            <p>{props.listInfo.brand}</p>
          </div>
        </label>
      </div>
    </div>
  );
}
