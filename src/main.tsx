import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ScrollContext from "./context/ScrollContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ScrollContext>
    <App />
  </ScrollContext>
);
