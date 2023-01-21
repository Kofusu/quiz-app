import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";

import App from "./App";
import "./index.css";
import QuizContextProvider from "./context/quiz-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: "#1f1f1f",
          colorTextBase: "#eee",
        },
      }}
    >
      <QuizContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QuizContextProvider>
    </ConfigProvider>
  </React.StrictMode>
);
