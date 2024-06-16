import React from 'react';
import { ReactComponent as Logo } from 'assets/bala_logo.svg';
import cn from 'utils/ts/classnames';
import { ReactComponent as UnderTab } from 'Asset/under_tab.svg';
import { ReactComponent as UnderTabOn } from 'Asset/under_tab_on.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuTab, setIsMenuTab] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onClickMenuTab = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsMenuTab(current => !current);
  };
  return (
    <div className={styles.header}>
      <Logo className={styles.header__logo} onClick={() => navigate('/')} />
      <div className={styles.header__list}>
        <Link
          className={cn({
            [styles.header__item]: true,
            [styles['header__item--start']]: true,
            [styles['header__item--bold']]: location.pathname === '/about'
          })}
          to="/about"
        >
          About
        </Link>
        <Link
          className={cn({
            [styles.header__item]: true,
            [styles['header__item--bar']]: true,
            [styles['header__item--bold']]: location.pathname === '/project'
          })}
          to="/project"
        >
          Project
        </Link>
        <Link
          className={cn({
            [styles.header__item]: true,
            [styles['header__item--lastbar']]: true,
            [styles['header__item--bold']]: location.pathname === '/designers'
          })}
          to="/designers"
        >
          Designers
        </Link>
        <div
          className={cn({
            [styles.header__item]: true,
            [styles['header__item--end']]: true
          })}
        >
          <div
            className={cn({
              [styles.generation]: true,
              [styles['generation--on']]: isMenuTab
            })}
            onClick={e => onClickMenuTab(e)}
          >
            30th
            {isMenuTab ? <UnderTabOn /> : <UnderTab />}
          </div>
          {isMenuTab && (
            <div className={styles.generation__tab}>
              <div className={styles.generation__item}>30th - 발아</div>
              <div
                className={cn({
                  [styles['generation__item']]: true,
                  [styles['generation__item--under']]: true
                })}
              >
                29th - 이륙준비
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
