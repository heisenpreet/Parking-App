import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LoadingSpinner from "./UIComponents/minorComponents/LoadingSpinner";

import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/Slices";
import { PersistGate } from "redux-persist/integration/react";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<LoadingSpinner />}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </Suspense>
);
