import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'utils/ts/classnames';
import { ReactComponent as MobileLogo } from 'assets/bala_logo_mobile.svg';
import { ReactComponent as MobileMenu } from 'assets/main_menu_mobile.svg';
import { ReactComponent as XIcon } from 'assets/close.svg';
import styles from './MobileHeader.module.scss';

export default function MobileHeader() {
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);
  const [aboutToggle, setAboutToggle] = React.useState<boolean>(false);
  const onClickToggle = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    setMenuToggle((current) => !current);
  };
  const onClickAboutToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setAboutToggle((current) => !current);
  };

  return (
    <div className={cn({
      [styles.header]: true,
      [styles['header--on']]: menuToggle,
    })}>
      <div className={cn({
          [styles.header__top]: true,
          [styles['header__top--on']]: menuToggle,
      })}>
        <MobileLogo className={cn({
          [styles.header__logo]: menuToggle,
        })} />
      {
        menuToggle ? (
          <XIcon 
            onClick={(e) => onClickToggle(e)}
            aria-hidden
          />
        ) : (
          <MobileMenu
            onClick={(e) => onClickToggle(e)}
            aria-hidden
          />
        )
      }
     </div>
     <div className={cn({
        [styles.menu]: true,
        [styles['menu--on']]: menuToggle,
      })}>
      <div className={
        styles.menu__content
      }>
        <div 
          className={cn({
            [styles.item]: true,
            [styles.item__first]: true,
            [styles['item--on']]: aboutToggle,
          })}
          onClick={(e) => onClickAboutToggle(e)}
        >
          ABOUT
          <div
            className={
              cn({
                [styles.item__list]: true,
                [styles['item__list--on']]: aboutToggle,
              })
            }
          >
            <div className={styles.item__link}>
              전시 소개
            </div>
            <div className={styles.item__link}>
              학과 소개
            </div>
          </div>
        </div>
        <Link className={styles.item} to="/project">
          PROJECT
        </Link>
        <Link className={styles.item} to="/designer">
          DESIGNER
        </Link>
        <div className={styles.item}>
          29th
        </div>
      </div>
     </div>
    </div>
  );
}