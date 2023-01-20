import { Button, Space } from "antd"
import Title from "antd/es/typography/Title"
import { FC } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link } from "react-router-dom"

import { auth } from "../firebase"

const Home: FC = () => {
  const [user, loading, error] = useAuthState(auth)
  return (
    <main>
      <Space size="large" style={{height: "75vh"}} className="flex-center" direction="vertical">
        <Title style={{textAlign: "center"}} >Welcome to Quiz App</Title>
        <Space>
          <Button type="primary"><Link to={user ? "/" : "/auth/login"}>{"Get Started  =>"}</Link></Button>
        </Space>
      </Space>
    </main>
  )
}

export default Home