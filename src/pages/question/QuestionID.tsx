import { Button, Card, Radio, RadioChangeEvent, Space } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { FC, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { QuizContext } from "../../context/quiz-context";
import { TimerContext } from "../../context/timer-context";

import { auth } from "../../firebase";

const QuestionID: FC = () => {
  const [answer, setAnswer] = useState<string>("");

  const [user, loading, error] = useAuthState(auth);
  const { question, fetchQuestion, gradeSet, grades }: any =
    useContext(QuizContext);
  const { timer, min1Sec } = useContext(TimerContext);
  const { id }: any = useParams();
  const navigate = useNavigate();

  const pageQuestion = question[+id - 1];
  const pageGrades = grades?.find((item: any) => item.qNum === +id) || 1;

  useEffect(() => {
    if (loading || !question) navigate("/question");
    setAnswer(pageGrades.answer);
    let intervalTimer = setInterval(() => {
      min1Sec();
    }, 1000);
    return () => {
      clearInterval(intervalTimer);
    };
  }, [id]);

  const radioChangeHandler = (e: RadioChangeEvent) => {
    setAnswer(e.target.value);
  };

  const back = () => {
    if (+id > 0) navigate(`/question/${+id - 1}`);
  };

  const next = () => {
    gradeSet(pageQuestion.question, pageQuestion.correct_answer, answer, +id);
    if (+id < 10) navigate(`/question/${+id + 1}`);
    else navigate("/question/result");
  };

  if (loading || !pageQuestion) {
    return (
      <Title className="flex-center" style={{ height: "80vh" }}>
        Loading...
      </Title>
    );
  } else {
  }

  if (!user) navigate("/auth/login");

  if (timer <= 0) {
    navigate("/question/result");
  }

  return (
    <main>
      <Title level={4} className="flex-center">
        Time Left: {timer} Sec
      </Title>
      <Title level={4} className="flex-center">
        {pageQuestion?.category} - {pageQuestion?.difficulty}
      </Title>
      <Card>
        <Space direction="vertical" size="large" style={{ padding: "1rem" }}>
          <Space direction="vertical">
            <Paragraph>
              {id}. {pageQuestion.question}
            </Paragraph>
            <Radio.Group value={answer} onChange={radioChangeHandler}>
              {[
                ...pageQuestion.incorrect_answers,
                pageQuestion.correct_answer,
              ].map((item: any) => {
                return (
                  <Radio key={item} value={item}>
                    {item}
                  </Radio>
                );
              })}
            </Radio.Group>
          </Space>
          <ButtonGroup>
            <Button onClick={back} disabled={id <= 1}>
              Back
            </Button>
            <Button onClick={next} disabled={!answer} type="primary">
              {id >= 10 ? "Submit" : "Next"}
            </Button>
          </ButtonGroup>
        </Space>
      </Card>
    </main>
  );
};

export default QuestionID;
