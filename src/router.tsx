import { createBrowserRouter } from "react-router";
import NotFound from "./pages/NotFound";
import CommonLayout from "./layout/CommonLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "",
    element: <CommonLayout />,

    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
