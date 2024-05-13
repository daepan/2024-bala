import styles from './Footer.module.scss';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import { ReactComponent as YoutubeIcon } from './Asset/youtube-icon.svg';
import { ReactComponent as InstagramIcon } from './Asset/instagram-icon.svg';
import { ReactComponent as FooterMainIcon } from './Asset/footer-main-icon.svg';

export default function Footer() {
  const isMobile = useMediaQuery();
  return isMobile ? (
    <div className={styles['mobile-footer-section']}>
      <div className={styles['mobile-footer-section__year']}>
        IDE 30th 졸업전시회
      </div>
      <div className={styles['mobile-footer-section__titleSection']}>
        <div className={styles['mobile-footer-section__title']}>
          발아 : 도약의 순간
        </div>
        <div className={styles['mobile-footer-section__snsSection']}>
          <a href="https://www.naver.com/">
            <InstagramIcon />
          </a>
          <a href="https://www.naver.com/">
            <YoutubeIcon />
          </a>
        </div>
      </div>
      <div className={styles['mobile-footer-section__address']}>
        31253) 충청남도 천안시 동남구 병천면 충절로 1600 <br />
        한국기술교육대학교공학2관 디자인공학전공
      </div>
      <div className={styles['mobile-footer-section__copyright']}>
        COPYRIGHT Ⓒ 2024. <br />
        KOREATECH. ALL RIGHT RESERVED.
      </div>
    </div>
  ) : (
    <div className={styles['footer-section']}>
      <FooterMainIcon />
      <div className={styles['footer-section__year']}>IDE 30th 졸업전시회</div>
      <div className={styles['footer-section__address']}>
        31253) 충청남도 천안시 동남구 병천면 충절로 1600
        한국기술교육대학교공학2관 디자인공학전공
      </div>
      <div className={styles['footer-section__copyright']}>
        COPYRIGHT Ⓒ 2024. KOREATECH. ALL RIGHT RESERVED.
      </div>
    </div>
  );
}
