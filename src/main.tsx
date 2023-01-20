import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { ConfigProvider, theme } from "antd"

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={{algorithm: theme.darkAlgorithm, token: {
      colorBgBase: "#1f1f1f",
      colorTextBase: "#eee",
    }}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
)
