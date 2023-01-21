import { createContext, FC, ReactNode, useState } from "react";
import useQuestion from "../hooks/useQuestion";

export const QuizContext = createContext({
  question: [],
  grades: [],
  fetchQuestion: () => {},
  refreshGrade: () => {},
  gradeSet: (question:string, correctAnswer: string, answer: string, qNum: number) => {},
});

const QuizContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const {question, fetchData, refresh} = useQuestion();
  const [grades, setGrades] = useState<any>(
    Array.from(Array(10).fill({ question: "", correctAnswer: "", answer: "" }))
  );

  const fetchQuestion = async () => {
    refresh();
    fetchData();
  };

  const refreshGrade = () => {
    setGrades(Array.from(Array(10).fill({ question: "", correctAnswer: "", answer: "" })))
  }

  const gradeSet = (question: string, correctAnswer: string, answer: string, qNum: number) => {
    setGrades((prevVal: any[]) => {
      return prevVal.map((item, i) => {
        if (i === qNum - 1) {
          return {
            question,
            correctAnswer, 
            answer, 
            qNum
          }
        }
        return item
      });
    });
  };

  return (
    <QuizContext.Provider
      value={{ question, grades, fetchQuestion, gradeSet, refreshGrade }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextProvider;
