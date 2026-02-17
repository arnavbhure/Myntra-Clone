import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/routes/App.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Bag from "./components/routes/Bag.jsx";
import Home from "./components/routes/Home.jsx";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
