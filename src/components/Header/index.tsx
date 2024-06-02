import { ReactComponent as Logo } from 'assets/bala_logo.svg';
import cn from 'utils/ts/classnames';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.header}>
      <Logo className={styles.header__logo} onClick={() => navigate('/')}/>
      <div className={styles.header__list}>
        <Link className={cn({
          [styles.header__item]: true,
          [styles['header__item--start']]: true,
          [styles['header__item--bold']]: location.pathname === '/about',
        })}
        to="/about">About</Link>
        <Link className={cn({
          [styles.header__item]: true,
          [styles['header__item--bar']]: true,
          [styles['header__item--bold']]: location.pathname === '/project',
        })}
        to="/project">Project</Link>
        <Link className={cn({
          [styles.header__item]: true,
          [styles['header__item--lastbar']]: true,
          [styles['header__item--bold']]: location.pathname === '/designers',
        })}
        to="/designers">Designers</Link>
        <div className={cn({
          [styles.header__item]: true,
          [styles['header__item--end']]: true
        })}>
          30th
        </div>
      </div>
    </div>
  )
}
