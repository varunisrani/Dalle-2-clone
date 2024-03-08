import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Landing from "./Components/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
