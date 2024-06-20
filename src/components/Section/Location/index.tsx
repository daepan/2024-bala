import useMediaQuery from 'utils/hooks/useMediaQuery';
import { ReactComponent as AddressLogo } from  './Asset/address_logo.svg';
import { ReactComponent as TimeLogo } from './Asset/time_logo.svg';
import { ReactComponent as Map } from './Asset/map.svg';
import styles from './Location.module.scss';

const MAP_LINK = "https://www.google.com/maps/place/%EB%85%B8%EB%93%A4%EA%B0%A4%EB%9F%AC%EB%A6%AC+1%EA%B4%80/data=!3m1!4b1!4m6!3m5!1s0x357ca1bcc95d37a3:0xabc9c03554d23238!8m2!3d37.517817!4d126.9576895!16s%2Fg%2F11r4h0118m?entry=ttu";

export default function LocationSection() {
  const isMobile = useMediaQuery();
  const onClickMap = () => {
    window.location.href = MAP_LINK;
  }
  return (
    <div className={styles.section}>
      <div className={styles.section__content}>
        <div className={styles.section__info}>
          <div className={styles.info__title}>
            { isMobile ? '오시는 길' : '전시 정보'}
          </div>
          <div className={styles.info__describe}>
            전시 ‘발아 : 도약의 순간’은 <br />
            서울 노들갤러리 1관에서 관람하실 수 있습니다.
          </div>
          <div className={styles.info__content}>
            <div className={styles.card}>
              <div className={styles.card__header}>
                <AddressLogo className={styles.card__logo} />
                <div className={styles.card__title}>  
                  ADDRESS
                </div>
              </div>
              <div className={styles.card__content}>
                서울 용산구 양녕로 445 <br />
                노들역 2번 출구에서 712m
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card__header}>
                <TimeLogo className={styles.card__logo} />
                <div className={styles.card__title}>
                  OPEN
                </div>
              </div>
              <div className={styles.card__content}>
                7/4 - 7/7 (4일간) <br />
                10:00AM - 20:00PM
              </div>
            </div>
          </div>
        </div>
        <Map className={styles.section__map} onClick={() => onClickMap()}/>
      </div>
    </div>
  )
}
