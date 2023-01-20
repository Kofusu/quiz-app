import { Space } from "antd"
import HeaderNav from "./components/templates/HeaderNav"
import AppRoute from "./Route"

function App() {
  return (
    <Space direction="vertical" style={{width: "100%"}}>
      <HeaderNav />
      <AppRoute />
    </Space>
  )
}

export default App
