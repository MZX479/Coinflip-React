import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./mainApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
