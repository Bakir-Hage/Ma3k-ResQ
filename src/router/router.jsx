import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "ServiceDetails/:serviceType",
    element: <ServiceDetails />,
  },
]);
export default router;
