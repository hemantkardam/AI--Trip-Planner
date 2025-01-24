import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "sonner";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/custom/Header.jsx";
import CreateTrip from "./create-trip/index.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
// import { IconContext } from "react-icons";
import Viewtrip from "./view-trip/[tripId]/index2.jsx";
import Footer from "./view-trip/Components/Footer.jsx";
import MyTrips from "./my-trip/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <CreateTrip />,
  },
  {
    path: "/View-trip/:tripId",
    element: <Viewtrip />,
  },
  {
    path: "/my-trip",
    element: <MyTrips />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header />
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
    <Footer />
  </React.StrictMode>
);
