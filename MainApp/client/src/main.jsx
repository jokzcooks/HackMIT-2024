import { ClerkProvider } from "@clerk/clerk-react";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <MantineProvider withGlobalStyles withNormalizeCSS defaultColorScheme="dark">
        <App />
      </MantineProvider>
    </ClerkProvider>
);
