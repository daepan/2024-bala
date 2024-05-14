import { ReactComponent as Logo } from 'assets/bala_logo.svg';
import cn from 'utils/ts/classnames';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <Logo onClick={() => navigate('/')}/>
      <div className={styles.header__list}>
        <Link className={cn({
          [styles.header__item]: true,
          [styles['header__item--start']]: true
        })}
        to="/about">About</Link>
        <Link className={cn({
          [styles.header__item]: true,
          [styles['header__item--bar']]: true
        })}
        to="/project">Project</Link>
        <Link className={cn({
          [styles.header__item]: true,
          [styles['header__item--lastbar']]: true
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
