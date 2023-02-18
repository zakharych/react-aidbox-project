import { setInstanceBaseURL } from "aidbox-react/lib/services/instance";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";

import "../src/services/initialize";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
