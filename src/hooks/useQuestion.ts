import { useCallback, useEffect, useState } from "react";

const useQuestion = () => {
  const AMOUNT = 10;
  const CATEGORY = 9;
  const DIFFICULTY = "easy";
  const url = `https://opentdb.com/api.php?amount=${AMOUNT}&category=${CATEGORY}&difficulty=${DIFFICULTY}`;
  const [question, setQuestion] = useState<any>("");

  const fetchData = useCallback(async () => {
    const res = await fetch(url)
    const data = await res.json()
    setQuestion(data.results)
  }, [setQuestion])

  useEffect(() => {
    fetchData()
  }, [])

  const refreshQuestion = () => {
    fetchData()
  }

  return [question, refreshQuestion]
};

export default useQuestion;
