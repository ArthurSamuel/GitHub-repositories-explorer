import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../features/home/page/Home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default route;
