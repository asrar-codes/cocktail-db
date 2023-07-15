import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import SingePageError from "./Pages/SingePageError";

function App() {
  // console.log(data);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <SingePageError />,
        },
        {
          path: "about",
          element: <About />,
          errorElement: <SingePageError />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
