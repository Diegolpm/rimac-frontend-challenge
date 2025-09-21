import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.tsx";
import { getEnviroments } from "./environments.ts";
import { GlobalAppProvider } from "./store/app-context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename={getEnviroments().VITE_APP_BASENAME}>
      <GlobalAppProvider>
        <App />
      </GlobalAppProvider>
    </Router>
  </StrictMode>
);
