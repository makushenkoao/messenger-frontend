import { createRoot } from "react-dom/client";
import App from "./app/App";
import './app/styles/index.css'

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root Not Found!");
}

const container = createRoot(root);

container.render(<App />);
