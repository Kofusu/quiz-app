import { Button, Col, Row, Space } from "antd";
import Card from "antd/es/card/Card";
import { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../context/quiz-context";

const Result: FC = () => {
  const { fetchQuestion, grades, refreshGrade }: any = useContext(QuizContext);
  const navigate = useNavigate();

  const grading = grades?.filter((grade: any) => grade.answer === grade.correctAnswer).length

  const finish = () => {
    fetchQuestion()
    refreshGrade()
    navigate("/question")
  }

  return (
    <main>
      <Space direction="vertical" size="large" style={{padding: "1rem"}}>
          <Title className="flex-center">
            Results: {grading}/{grades?.length}
          </Title>
        <Row gutter={[0, 16]}>
          {grades?.map((grade: any) => {
            return grade.answer !== "" ? (
              <Col span={24}>
                <Card
                  title={`${grade.qNum}. ${grade.question}`}
                  style={{ width: "100%" }}
                >
                  <Header></Header>
                  <Space>
                    <span
                      style={
                        grade.answer !== grade.correctAnswer
                          ? { color: "red" }
                          : { color: "green" }
                      }
                    >
                      Answer: {grade.answer}
                    </span>
                    {grade.answer !== grade.correctAnswer && (
                      <span style={{ color: "green" }}>
                        CorrectAnswer: {grade.correctAnswer}
                      </span>
                    )}
                  </Space>
                </Card>
              </Col>
            ) : (
              <></>
            );
          })}
        </Row>
        <Button size="large" onClick={finish} block type="primary">Retry</Button>
      </Space>
    </main>
  );
};

export default Result;
