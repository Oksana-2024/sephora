import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import SearchForm from '../SearchForm/SearchForm';
import useMedia from '../../helpers/useMedia';
import s from './Header.module.css';

export default function Header() {
  const { isBigScreen } = useMedia();
  return (
    <header className={s.header}>
      <Container className={s.headerbox}>
        <div className={s.imgWrapper}>
          {isBigScreen ? (
            <img
              src="/logo_d.webp"
              alt="Logo"
              srcSet="/logo_d@2x.webp"
              width={194}
              height={55}
            />
          ) : (
            <img
              src="/logo.webp"
              alt="Logo"
              srcSet="/logo@2x.webp"
              width={110}
              height={31}
            />
          )}
        </div>
        <SearchForm />
        {isBigScreen && (
          <nav className={s.navList}>
            <NavLink className={s.navLink} to="/">
              <img src="/build.svg" alt="Build icon" width={24} />
              <div className={s.wrapper}>
                <h3 className={s.navTitle}>Shops and Services</h3>
                <p className={s.descrNav}>Choose your store.</p>
              </div>
            </NavLink>
            <NavLink className={s.navLink} to="/">
              <img src="/community.svg" alt="Peeple icon" width={24} />
              <h3 className={s.navTitle}> Community</h3>
            </NavLink>
            <NavLink className={s.navLink} to="/">
              <img src="/login.svg" alt="Girl icon" width={24} />
              <div className={s.wrapper}>
                <h3 className={s.navTitle}>Log in </h3>
                <p className={s.descrNav}>for FREE delivery 🚚</p>
              </div>
            </NavLink>
          </nav>
        )}
        <button className={s.heartBtn}>
          <img
            src="/heart.svg"
            alt="Heart icon"
            width={24}
            className={s.heartIcon}
          />
        </button>
        <button className={s.basketBtn}>
          <img src="/basket.svg" alt="Basket" width={24} height={22} />
        </button>
      </Container>
    </header>
  );
}
