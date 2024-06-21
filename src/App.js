import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import About from "./Page/About";
import Projacts from "./Page/Projacts";
import Contactme from "./Page/Contactme";

function App() {
  const router = createBrowserRouter([
    {
      path: "/portfolio",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/project",
      element: <Projacts />,
    },
    {
      path: "/contact",
      element: <Contactme />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
