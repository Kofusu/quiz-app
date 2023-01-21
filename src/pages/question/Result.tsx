import { Button, Col, Row, Space } from "antd";
import Card from "antd/es/card/Card";
import { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../context/quiz-context";
import { TimerContext } from "../../context/timer-context";

const Result: FC = () => {
  const { question, fetchQuestion, grades, refreshGrade }: any =
    useContext(QuizContext);
  const { resetTimer }: any = useContext(TimerContext);
  const navigate = useNavigate();

  const grading = grades?.filter(
    (grade: any) => grade.answer === grade.correctAnswer && grade.answer !== ""
  ).length;

  const finish = () => {
    fetchQuestion();
    refreshGrade();
    resetTimer();
    navigate("/question");
  };

  return (
    <main>
      <Space direction="vertical" size="large" style={{ padding: "1rem" }}>
        <Title className="flex-center">
          Results: {grading}/{grades?.length}
        </Title>
        <Row gutter={[0, 16]}>
          {grades?.map((grade: any, i: number) => {
            return (
              <Col span={24}>
                <Card
                  title={`${i + 1}. ${question[i]?.question}`}
                  style={{ width: "100%" }}
                >
                  <Header></Header>
                  <Space>
                    {grade.answer ? (
                      <span
                        style={
                          grade.answer === grade.correctAnswer
                            ? { color: "green" }
                            : { color: "red" }
                        }
                      >
                        Answer: {grade.answer || "-"}
                      </span>
                    ) : (
                      <span
                        style={{ color: "red" }}
                      >
                        Not answered
                      </span>
                    )}
                    {grade.answer !== grade.correctAnswer && (
                      <span style={{ color: "green" }}>
                        CorrectAnswer: {grade.correctAnswer}
                      </span>
                    )}
                  </Space>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Button size="large" onClick={finish} block type="primary">
          Retry
        </Button>
      </Space>
    </main>
  );
};

export default Result;
