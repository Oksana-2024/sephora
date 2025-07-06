import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { questions, QuizContext } from '../../helpers/quizHooks';

import Container from '../Container/Container';
import QuizCard from '../QuizContext/QuizCard';
import s from './SectionHero.module.css';

export default function SectionHero() {
  const { state, dispatch } = useContext(QuizContext);

  return (
    <section className={s.hero}>
      <Container className={s.heroBox}>
        <AnimatePresence mode="wait">
          {state.isFinished ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className={s.resultTitle}>Results:</h2>
              <ol className={s.listResult}>
                {Object.values(state.answers).map((item, i) => (
                  <li className={s.listItem} key={i}>
                    {item}
                  </li>
                ))}
              </ol>
            </motion.div>
          ) : (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className={s.title}>Congratulations!</h1>
              <p className={s.descr}>
                The "Mysterious Sephora Box" contest has started. You have been
                selected to try new products from well-known brands. For only 65
                MXN, you will receive a box full of products that will soon be
                available in Sephora stores. Limit: one box per customer.
              </p>

             <div className={s.imageBoxWrapper}> <div className={s.imageBox}></div></div>
              <p className={s.firstText}>
                To receive your Sephora Box, complete the form to confirm that
                you are a real person.
              </p>
              <p className={s.secondText}>
                Hurry up, the number of prizes is limited!
              </p>

              <ul>
                <AnimatePresence mode="wait">
                  {questions
                    .filter((_, index) => index === state.step)
                    .map((item) => (
                      <motion.li
                        key={state.step}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <QuizCard
                          current={state.step + 1}
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
                      </motion.li>
                    ))}
                </AnimatePresence>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
