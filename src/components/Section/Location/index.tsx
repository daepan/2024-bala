import { ReactComponent as AddressLogo } from  './Asset/address_logo.svg';
import { ReactComponent as TimeLogo } from './Asset/time_logo.svg';
import { ReactComponent as Map } from './Asset/map.svg';
import styles from './Location.module.scss';

export default function LocationSection() {
  return (
    <div className={styles.section}>
      <div className={styles.section__content}>
      <div className={styles.section__info}>
        <div className={styles.info__title}>
          전시 정보
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
      <Map calcMode={styles.section__map}/>
      </div>
    </div>
  )
}
