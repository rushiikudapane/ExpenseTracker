import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./Context/Context";
import { SpeechProvider } from "@speechly/react-client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SpeechProvider
      appId="3afa4fd1-ae7d-433c-ae5d-04b485e64724"
      language="en-US"
    >
      <Provider>
        <App />
      </Provider>
    </SpeechProvider>
  </React.StrictMode>
);
