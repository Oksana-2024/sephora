import s from './QuizCard.module.css';

export interface IQuestion {
  answer: string;
}
interface IQuizCard {
  current: number;
  total: number;
  question: string;
  answer: string[];
  onClick: (item: string) => void;
}
export default function QuizCard({
  current,
  total,
  question,
  answer,
  onClick,
}: IQuizCard) {
  return (
    <div className={s.card}>
      <h3 className={s.title}>
        Question {current} of {total}
      </h3>
      <p className={s.question}>{question}</p>
    <div className={s.buttonWrapper}>
        {answer.map((item, index) => (
          <button className={s.button} key={index} onClick={() => onClick(item)}>
            {item}
          </button>
        ))}
    </div>
    </div>
  );
}
