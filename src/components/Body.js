import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Error from "./Error";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
