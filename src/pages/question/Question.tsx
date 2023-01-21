import { Button, Space } from "antd";
import Title from "antd/es/typography/Title";
import { FC, useContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { QuizContext } from "../../context/quiz-context";
import { auth } from "../../firebase";

const Question: FC = () => {
  const [user, loading, error] = useAuthState(auth)
  const { fetchQuestion, refreshGrade }: any = useContext(QuizContext)
  const navigate = useNavigate();

  const playHandler = () => {
    fetchQuestion()
    refreshGrade()
  }

  if (loading) {
    return (
      <Title className="flex-center" style={{height: "80vh"}}>Loading...</Title>
    )
  }

  if (!user) navigate("/auth/login");

  return (
    <main>
      <Space size="large" style={{height: "75vh"}} className="flex-center" direction="vertical">
        <div>
          <Title style={{textAlign: "center"}} >Wanna Play a quiz?</Title>
          <Title level={4} style={{textAlign: "center"}} >You need to answers 10 Question in 1 Minutes!</Title>
        </div>
        <Space>
          <Link to="/"><Button type="dashed">cancel</Button></Link>
          <Link onClick={playHandler} to="/question/1"><Button type="primary">Play</Button></Link>
        </Space>
      </Space>
    </main>
  )
}

export default Question