import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "sonner";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/custom/Header.jsx";
import CreateTrip from "./create-trip/index.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Viewtrip from "./view-trip/[tripId]/index2.jsx";
import Footer from "./view-trip/Components/Footer.jsx";
import MyTrips from "./my-trip/Index.jsx";

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/create-trip",
    element: (
      <Layout>
        <CreateTrip />
      </Layout>
    ),
  },
  {
    path: "/View-trip/:tripId",
    element: (
      <Layout>
        <Viewtrip />
      </Layout>
    ),
  },
  {
    path: "/my-trip",
    element: (
      <Layout>
        <MyTrips />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Toaster />
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
