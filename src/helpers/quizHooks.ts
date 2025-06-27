import { createContext, useContext, useReducer, type Dispatch } from 'react';

type State = {
  step: number;
  answers: Record<number, string>;
  isFinished: boolean;
};

type Action =
  | { type: 'SET_ANSWER'; step: number; answer: string }

const initialState: State = {
  step: 0,
  answers: {},
  isFinished: false,
};

export const QuizContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context)
    throw new Error('useQuizContext must be used within TestProvider');
  return context;
};

export const useQuizContextReducer = () => useReducer(reducer, initialState);

function reducer(state: State, action: Action): State {
 
  
  switch (action.type) {
    case 'SET_ANSWER': {
      const isLast = state.step >= questions.length - 1;
      return {
        ...state,
        answers: { ...state.answers, [action.step]: action.answer },
        step: isLast ? state.step : state.step + 1,
        isFinished: isLast,
      };
    }
    default:
      return state;
  }
}

export const questions = [
  {
    question: 'Do you have a valid address in Mexico?',
    answer: ['Yes', 'No'],
  },
  {
    question:
      'Have you participated in any Sephora promotion in the last 90 days?',
    answer: ['Yes', 'No'],
  },
  {
    question:
      'Select your skin type to personalize your box with the right products.',
    answer: ['Normal', 'Sensitive', 'Combination', 'Oily', 'Dry'],
  },
];
