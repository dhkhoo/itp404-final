import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import List from "../List.js";

export default function Admin() {
  const list = useLoaderData();
  //console.log(list);

  useEffect(() => {
    document.title = "Admin Page";
  }, []);

  // checkbox useState // fix this !
  const [check, setCheck] = useState([
    { id: "0", check: false },
    { id: "1", check: false }
  ]);

  // info that can be passed down to customize the content being rendered
  const listInfo = list;

  // styling using CSS
  const listStyling = {
    padding: "10px",
    borderRadius: "0",
    color: "cornflowerBlue"
  };

  // styling using classes (bootstrap)
  const classNames1 = "border";

  return (
    <div className="container">
      <h1>Admin</h1>
      <List
        listInfo={listInfo}
        setCheck={setCheck}
        checked={check}
        style={listStyling}
        classNames={classNames1}
      />
    </div>
  );
}
