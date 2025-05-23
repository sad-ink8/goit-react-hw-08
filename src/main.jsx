import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <Toaster />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
