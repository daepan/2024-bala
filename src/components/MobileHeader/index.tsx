import React from 'react';
import cn from 'utils/ts/classnames';
import { ReactComponent as MobileLogo } from 'assets/bala_logo_mobile.svg';
import { ReactComponent as MobileMenu } from 'assets/main_menu_mobile.svg';
import { ReactComponent as XIcon } from 'assets/close.svg';
import styles from './MobileHeader.module.scss';

export default function MobileHeader() {
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);
  const onClickToggle = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    setMenuToggle((current) => !current);
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
        <div className={styles.item}>
          ABOUT
        </div>
        <div className={styles.item}>
          PROJECT
        </div>
        <div className={styles.item}>
          DESIGNER
        </div>
        <div className={styles.item}>
          29th
        </div>
      </div>
     </div>
    </div>
  );
}