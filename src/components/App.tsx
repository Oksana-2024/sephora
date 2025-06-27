import { ToastContainer } from 'react-toastify';
import { QuizProvider } from './QuizContext/QuizContext';
import Header from './Header/Header';
import SectionHero from './SectionHero/SectionHero';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <QuizProvider>
          <SectionHero />
        </QuizProvider>
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
