import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./pages/3SignupPage/SignupPage";
import HomePage from "./pages/2HomePage/HomePage";
import RootPage from "./pages/1RootPage/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/service/:name", element: <SignupPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
