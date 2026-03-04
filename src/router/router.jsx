import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import Home from "../pages/Home";
import GarageParts from "../pages/GarageParts";
import ServiceListPage from "../pages/ServiceListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "ServiceDetails/:serviceType",
        element: <ServiceDetails />,
      },
    {
      path: "ServiceListPage/:serviceType",
      element: <ServiceListPage />,
    },

      {
        path: "garage",
        element: <GarageParts />,
      },
    ],
  },
]);
// export default router;
// import { createBrowserRouter } from "react-router-dom";
// import ServiceListPage from "../pages/ServiceListPage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <ServiceListPage
//         categoryTitle="Tow Truck Services"
//         services={[
//           {
//             name: "Al-Najah Auto Care",
//             rating: 3,
//             distance: 1.8,
//             address: "Al-Murjan, Riyadh",
//             phone: "+966500000000",
//             mapLink: "https://www.google.com/maps",
//             isOpen24h: true,
//           },
//           {
//             name: "Fast Rescue",
//             rating: 4.5,
//             distance: 2.4,
//             address: "King Fahd Rd, Riyadh",
//             phone: "+966511111111",
//             mapLink: "https://www.google.com/maps",
//             isOpen24h: true,
//           },
//           {
//             name: "Road Hero Tow",
//             rating: 4.9,
//             distance: 3.1,
//             address: "Olaya Street, Riyadh",
//             phone: "+966522222222",
//             mapLink: "https://www.google.com/maps",
//             isOpen24h: true,
//           },
//         ]}
//       />
//     ),
//   },
// ]);

export default router;
