import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Searchbox from "./Searchbox";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Searchbox />
  </StrictMode>
);
