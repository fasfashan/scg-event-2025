import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import Dashboard from "./dashboard";
import Layout from "../layout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Layout>
      <Dashboard />
    </Layout>
  </StrictMode>
);
