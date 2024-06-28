import React from 'react';
import cn from 'utils/ts/classnames';
import { createSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as MobileLogo } from 'assets/bala_logo_mobile.svg';
import { ReactComponent as MobileMenu } from 'assets/main_menu_mobile.svg';
import { ReactComponent as XIcon } from 'assets/close.svg';
import { TAB_LIST } from 'pages/About';
import styles from './MobileHeader.module.scss';

export default function MobileHeader() {
  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);
  const [aboutToggle, setAboutToggle] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const onClickToggle = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    setMenuToggle(current => !current);
  };
  const onClickAboutToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setAboutToggle(current => !current);
  };

  const onClickTab = (e: React.MouseEvent<HTMLDivElement>, tab: string) => {
    e.preventDefault();
    setMenuToggle(false);
    navigate({
      pathname: '/about',
      search: createSearchParams({
        tab
      }).toString()
    });
  };

  const onClickDesigner = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setMenuToggle(false);
    navigate('/designers');
  };

  return (
    <div
      className={cn({
        [styles.header]: true,
        [styles['header--on']]: menuToggle
      })}
    >
      <div
        className={cn({
          [styles.header__top]: true,
          [styles['header__top--on']]: menuToggle
        })}
      >
        <MobileLogo
          className={cn({
            [styles.header__logo]: menuToggle
          })}
          onClick={() => navigate('/')}
        />
        {menuToggle ? (
          <XIcon onClick={e => onClickToggle(e)} aria-hidden />
        ) : (
          <MobileMenu onClick={e => onClickToggle(e)} aria-hidden />
        )}
      </div>
      <div
        className={cn({
          [styles.menu]: true,
          [styles['menu--on']]: menuToggle
        })}
      >
        <div className={styles.menu__content}>
          <div
            className={cn({
              [styles.item]: true,
              [styles.item__first]: true,
              [styles['item--on']]: aboutToggle
            })}
            onClick={e => onClickAboutToggle(e)}
          >
            ABOUT
            <div
              className={cn({
                [styles.item__list]: true,
                [styles['item__list--on']]: aboutToggle
              })}
            >
              {TAB_LIST.map(tab => (
                <div
                  className={styles.item__link}
                  key={tab}
                  onClick={e => onClickTab(e, tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
          </div>
          {/* <Link className={styles.item} to="/project">
            PROJECT
          </Link> */}
          <div className={styles.item} onClick={() => alert('준비중입니다.')}>
            PROJECT
          </div>
          <div className={styles.item} onClick={e => onClickDesigner(e)}>
            DESIGNER
          </div>
          <a className={styles.item} href="http://ide-2023.com/main">
            29th
          </a>
        </div>
      </div>
    </div>
  );
}
