import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Analytics from "./pages/Analytics.jsx";
import Users from "./pages/Users.jsx";
import Products from "./pages/Products.jsx";
import Orders from "./pages/Orders.jsx";
import Settings from "./pages/Settings.jsx";
import { ClerkProvider } from "@clerk/react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <ClerkProvider>

      <BrowserRouter>

        <Routes>

          {/* Login Form */}
          <Route
            path="/"
            element={<App />}
          />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
<Route path="/analytics" element={<Analytics />} />

<Route path="/users" element={<Users />} />

<Route path="/products" element={<Products />} />

<Route path="/orders" element={<Orders />} />

<Route path="/settings" element={<Settings />} />
        </Routes>

      </BrowserRouter>

    </ClerkProvider>

  </StrictMode>
);