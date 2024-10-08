import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import jwtInterceptor from "./middlewares/jwtInterceptor";
import { AuthProvider } from "./contexts/authentication";
import { BrowserRouter } from "react-router-dom";

jwtInterceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
