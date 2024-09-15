import { ClerkProvider } from "@clerk/clerk-react";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./containers/Default/Default.module.css";
import "./index.css";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

console.log('Clerk Publishable Key:', PUBLISHABLE_KEY); // Remove this after verifying

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <MantineProvider withGlobalStyles withNormalizeCSS defaultColorScheme="dark">
        <App />
      </MantineProvider>
    </ClerkProvider>
  </React.StrictMode>
);
