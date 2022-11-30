import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import "react-toastify/dist/ReactToastify.css";

export default function Root() {
  return (
    <div>
      <Navigation />
      <div className="container-fluid">
        <div id="modal-container"></div>
        {/* where we want the dynamic content */}
        <ToastContainer />
        <Outlet />
      </div>
    </div>
  );
}
