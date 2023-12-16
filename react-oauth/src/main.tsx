import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Toaster } from "react-hot-toast";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1032743541860-b826vcgssuvhdppg1h1127i42glra5qg.apps.googleusercontent.com">
      <App />
      <Toaster />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
