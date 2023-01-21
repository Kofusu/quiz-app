import { useCallback, useEffect, useState } from "react";

const useQuestion = () => {
  const AMOUNT = 10;
  const url = `https://opentdb.com/api.php?amount=${AMOUNT}`;
  const [question, setQuestion] = useState<any>([]);

  const fetchDatas = useCallback(async () => {
    const res = await fetch(url)
    const data = await res.json()
    setQuestion(data.results)
  }, [setQuestion])

  const fetchData = () => {
    fetchDatas()
  }

  const refresh = () => {
    setQuestion((prev: any) => prev)
  }

  return {question, fetchData, refresh}
};

export default useQuestion;
