import { createContext, FC, ReactNode, useState } from "react";
import useQuestion from "../hooks/useQuestion";

export const QuizContext = createContext({
  question: [],
  grades: [],
  refreshQuestion: () => {},
  addGrade: (grade: boolean) => {}
})

const QuizContextProvider: FC<{children: ReactNode}> = ({children}) => {
  const [question, refresh] = useQuestion()
  const [grades, setGrade] = useState<any>([])

  const refreshQuestion = () => {
    refresh()
    setGrade([])
  }
  const addGrade = (grade: boolean) => {
    refresh()
    setGrade((previousGrade: []) => [...previousGrade, grade])
  }

  return (
    <QuizContext.Provider value={{question, grades, refreshQuestion, addGrade}}>
      {children}
    </QuizContext.Provider>
  )
}

export default QuizContextProvider