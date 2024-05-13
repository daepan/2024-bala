import cn from "utils/ts/classnames";
import { ReactComponent as Logo } from 'assets/bala_logo.svg';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.header__list}>
        <div className={cn({
          [styles.header__item]: true,
          [styles['header__item--start']]: true
        })}>About</div>
        <div className={cn({
          [styles.header__item]: true,
          [styles['header__item--bar']]: true
        })}>Project</div>
        <div className={cn({
          [styles.header__item]: true,
          [styles['header__item--lastbar']]: true
        })}>Designers</div>
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
