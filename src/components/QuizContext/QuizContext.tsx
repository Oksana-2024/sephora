import { type ReactNode } from 'react';
import { QuizContext, useQuizContextReducer } from '../../helpers/quizHooks';

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useQuizContextReducer();

  return <QuizContext value={{ state, dispatch }}>{children}</QuizContext>;
};
