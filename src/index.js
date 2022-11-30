import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  redirect,
  RouterProvider
} from "react-router-dom";
import Index from "./routes/Index";
import Root from "./routes/Root";
import "bootstrap/dist/css/bootstrap.css";
import ProductDetails from "./routes/ProductDetails";
import Admin from "./routes/Admin";
import EditProduct from "./routes/EditProduct";
import {
  addMakeup,
  deleteProduct,
  fetchMakeup,
  fetchMakeupList,
  updateFavorite,
  updateMakeup
} from "./api";
import { toast } from "react-toastify";
import Favorites from "./routes/Favorites";
import "./styles.css";
import PageNotFound from "./routes/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />,
        loader() {
          return fetchMakeupList();
        }
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader({ params }) {
          return fetchMakeup(params.id);
        }
      },
      {
        path: "/products/:id/edit",
        element: <EditProduct />,
        loader({ params }) {
          return fetchMakeup(params.id);
        },
        action({ request, params }) {
          return request.formData().then((formData) => {
            return updateMakeup(
              params.id,
              formData.get("name"),
              formData.get("brand"),
              formData.get("link"),
              formData.get("image-link"),
              formData.get("type"),
              formData.get("variant"),
              formData.get("price"),
              formData.get("expiry"),
              formData.get("open"),
              formData.get("notes")
            ).then(() => {
              toast.success("You've successfully updated this product.");
              return redirect("/");
            });
          });
        }
      },
      {
        path: "/favorites",
        element: <Favorites />,
        loader() {
          return fetchMakeupList();
        }
      },
      {
        path: "/admin",
        element: <Admin />,
        loader() {
          return fetchMakeupList();
        }
      },
      {
        path: "/products/addProduct",
        action({ request }) {
          console.log("requesting to add");
          return request.formData().then((formData) => {
            return addMakeup(
              formData.get("name"),
              formData.get("brand"),
              formData.get("link"),
              formData.get("image-link"),
              formData.get("type"),
              formData.get("variant"),
              formData.get("price"),
              formData.get("expiry"),
              formData.get("open"),
              formData.get("notes"),
              formData.get("added"),
              formData.get("favorite"),
              formData.get("dateAdded")
            ).then(() => {
              toast.success("You've successfully added a product.");

              return redirect("/");
            });
          });
        }
      },
      {
        //THIS IS NOT WORKING RIGHT NOW -- GETTING A 405 ERROR
        path: "/products/:id/destroy",
        action({ request, params }) {
          //console.log("in index destroy");
          //console.log(params.id);
          return request.formData().then((formData) => {
            return deleteProduct(params.id).then(() => {
              toast.success("Product Removed.");
              return redirect("/");
            });
          });
        }
      },
      {
        // THIS IS ALSO NOT WORKING -- GETTING A 405 ERROR
        path: "/products/:id/favorite",
        action({ request, params }) {
          console.log("favoriting");
          return request.formData().then((formData) => {
            return updateFavorite(
              params.id,
              formData.get("favorite"),
              formData.get("dateFavorited")
            ).then(() => {
              toast.success("You've updated your favorites");
              return redirect("/");
            });
          });
        }
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  }
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
