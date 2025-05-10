import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="maxContainer">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Provider store={store}>
          <BrowserRouter>
            <App />
             <Toaster richColors position="top-right" />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </div>
  </StrictMode>
);
