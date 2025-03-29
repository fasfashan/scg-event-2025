import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import EventActivity from "./pages/EventActivity";
import Booth from "./pages/Booth";
import Quiz from "./pages/Quiz";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/event-activity",
    element: <EventActivity />,
  },
  {
    path: "/dashboard/event-activity/booth/:id",
    element: <Booth />,
  },
  {
    path: "/dashboard/event-activity/booth/:id/quiz",
    element: <Quiz />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
