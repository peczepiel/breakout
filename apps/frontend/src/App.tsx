import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import FlowerDelivery from "./routes/service_request_routes/FlowerDelivery.tsx";
import Login from "./routes/Login.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
//import SideNavbar from "./components/SideNavbar.tsx";
import "./styles/App.css";
import Requests from "./routes/Requests.tsx";
import { CSVPage } from "./routes/CSVPage.tsx";
//import PathGrapher from "./map_page/PathGrapher.tsx";
import GiftRequest from "./routes/service_request_routes/GiftRequest.tsx";
import MedicineRequest from "./routes/service_request_routes/MedicineRequest.tsx";
import MedicalDeviceRequest from "./routes/service_request_routes/MedicalDeviceRequest.tsx";
import "./index.css";
import Map from "./refactored_map_page/Map.tsx";
import RoomScheduling from "./routes/service_request_routes/RoomScheduling.tsx";
import NewSideNavBar from "./components/NewSideNavBar.tsx";
import Banner from "./components/Banner.tsx";
import Dashboard from "./routes/Dashboard.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <div />,
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Map />,
        },
        {
          path: "/csv-page",
          element: <CSVPage />,
        },
        {
          path: "/flower-delivery",
          element: <FlowerDelivery />,
        },
        {
          path: "/room-scheduling",
          element: <RoomScheduling />,
        },
        {
          path: "/requests",
          element: <Requests />,
        },
        {
          path: "/medicine-request",
          element: <MedicineRequest />,
        },
        {
          path: "/gift-request",
          element: <GiftRequest />,
        },
        {
          path: "/medical-device-request",
          element: <MedicalDeviceRequest />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard", // this is all placeholder until we have a real login system
      element: (
        <>
          <Banner
            bannerState={"loggedIn"}
            name={"Gus"}
            role={"Admin"}
            email={"gmmontana@wpi.edu"}
          />
          <Dashboard />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;

  function Root() {
    return (
      <div>
        <NewSideNavBar />
        <Banner bannerState={"loggedOut"} />
        <Outlet />
      </div>
    );
  }
}

export default App;
