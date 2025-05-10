import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import "./App.css";
import MainLayout from "./Pages/MainLayout/MainLayout";
import "flowbite";
import Home from "./Pages/Home/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
