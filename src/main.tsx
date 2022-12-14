import { setInstanceBaseURL } from "aidbox-react/lib/services/instance";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";

setInstanceBaseURL("http://localhost:8888");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
