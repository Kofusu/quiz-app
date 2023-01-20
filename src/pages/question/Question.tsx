import { Button, Space } from "antd";
import Title from "antd/es/typography/Title";
import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const Question: FC = () => {
  const [user, loading, error] = useAuthState(auth)

  return (
    <main>
      <Space size="large" style={{height: "75vh"}} className="flex-center" direction="vertical">
        <Title style={{textAlign: "center"}} >Wanna Play a quiz?</Title>
        <Space>
          <Link to="/"><Button type="dashed">cancel</Button></Link>
          <Link to="/question/1"><Button type="primary">Play</Button></Link>
        </Space>
      </Space>
    </main>
  )
}

export default Question