import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/ladingPage/ladingPage";
import { NotFoundPage } from "./pages/notFoundPage/notFoundPage";

function App() {
  const router = createBrowserRouter(
    [
      { path: "/", element: <LandingPage /> },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
    { basename: "Nike-Clone" },
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
