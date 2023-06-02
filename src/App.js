import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./pages/3SignupPage/SignupPage";
import HomePage from "./pages/2HomePage/HomePage";
import RootPage from "./pages/1RootPage/RootPage";
import NetworkPage from "./pages/4Network/NetworkPage";
import ErrandPage from "./pages/5Errands/ErrandPage";
import EventsPage from "./pages/6Events/EventsPage";
import FoodPage from "./pages/7Food/FoodPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/networking", element: <NetworkPage /> },
      { path: "/errands", element: <ErrandPage /> },
      { path: "/events", element: <EventsPage /> },
      { path: "/food", element: <FoodPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
