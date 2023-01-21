import { Children, createContext, FC, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

const MAX_TIME = 60;

export const TimerContext = createContext({
  timer: MAX_TIME,
  min1Sec: () => {},
  resetTimer: () => {},
});

const TimerContextProvider: FC<Props> = ({ children }) => {
  const [timerState, setTimerState] = useState<number>(MAX_TIME);

  const min1Sec = (): void => {
    setTimerState((lastTime) => lastTime - 1);
  };

  const resetTimer = (): void => {
    setTimerState(MAX_TIME);
  };

  return (
    <TimerContext.Provider
      value={{
        timer: timerState,
        min1Sec,
        resetTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerContextProvider;
