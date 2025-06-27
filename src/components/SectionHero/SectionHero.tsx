import { useContext } from 'react';
import { questions, QuizContext } from '../../helpers/quizHooks';
import useMedia from '../../helpers/useMedia';
import Container from '../Container/Container';
import QuizCard from '../QuizContext/QuizCard';
import s from './SectionHero.module.css';

export default function SectionHero() {
  const { isBigScreen } = useMedia();
  const { state, dispatch } = useContext(QuizContext);

  return (
    <section className={s.hero}>
      <Container className={s.heroBox}>
        {state.isFinished ? (
          <>
            <h2 className={s.resultTitle}>Results:</h2>
            <ol className={s.listResult}>
              {Object.values(state.answers).map((item, i) => (
                <li className={s.listItem} key={i}>
                  {item}
                </li>
              ))}
            </ol>
          </>
        ) : (
          <>
            <h1 className={s.title}>Congratulations!</h1>
            <p className={s.descr}>
              The "Mysterious Sephora Box" contest has started. You have been
              selected to try new products from well-known brands. For only 65
              MXN, you will receive a box full of products that will soon be
              available in Sephora stores. Limit: one box per customer.
            </p>
            {isBigScreen ? (
              <img
                src="/promoImage_d.png"
                alt="Promo Sephora"
                srcSet="/promoImage_d@2x.png"
                width={1440}
                height={412}
                className={s.heroImg}
              />
            ) : (
              <img
                src="/promoImage.png"
                alt="Promo Sephora"
                srcSet="/promoImage@2x.png"
                width={393}
                height={113}
                className={s.heroImg}
              />
            )}
            <p className={s.firstText}>
              To receive your Sephora Box, complete the form to confirm that you
              are a real person.
            </p>
            <p className={s.secondText}>
              Hurry up, the number of prizes is limited!
            </p>
            <ul>
              {questions
                .map((item, index) => (
                  <li key={index}>
                    <QuizCard
                      current={index + 1}
                      question={item.question}
                      total={questions.length}
                      answer={item.answer}
                      onClick={(answer) => {
                        dispatch({
                          step: state.step,
                          answer,
                          type: 'SET_ANSWER',
                        });
                      }}
                    />
                  </li>
                ))
                .filter((_, index) => index === state.step)}
            </ul>
          </>
        )}
      </Container>
    </section>
  );
}
