import { ReactComponent as Logo } from 'assets/bala_logo.svg';
import cn from 'utils/ts/classnames';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
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
