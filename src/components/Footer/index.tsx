import styles from './Footer.module.scss';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import { ReactComponent as YoutubeIcon } from './Asset/youtube-icon.svg';
import { ReactComponent as InstagramIcon } from './Asset/instagram-icon.svg';
import { ReactComponent as FooterMainIcon } from './Asset/footer-main-icon.svg';
import { ReactComponent as KoreatechIcon } from 'Asset/koreatech.svg';
import { ReactComponent as DscIcon } from 'Asset/dsc.svg';
import { ReactComponent as IdeIcon } from 'Asset/ide.svg';
import { ReactComponent as LincIcon } from 'Asset/linc.svg';
import { ReactComponent as SeedkeeperIcon } from 'Asset/seedkeeper.svg';
import { ReactComponent as SmartHumanInterfaceIcon } from 'Asset/smart-human-interface.svg';

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
          <a
            href="https://www.instagram.com/2024_ide_graduation?igsh=MW9lemdpYnRhZDhxYg==&utm_source=qr"
            rel="noreferrer"
            target="_blank"
           >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/@IDE_graduation"
            rel="noreferrer"
            target="_blank"
          >
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
    <div className={styles.footer}>
      <div className={styles['footer-section']}>
        <FooterMainIcon className={styles['bala-icon']} />
        <div className={styles['footer-section__year']}>
          IDE 30th 졸업전시회
        </div>
        <div className={styles['footer-section__address']}>
          31253) 충청남도 천안시 동남구 병천면 충절로 1600
          한국기술교육대학교공학2관 디자인공학전공
        </div>
        <div className={styles['footer-section__copyright']}>
          COPYRIGHT Ⓒ 2024. KOREATECH. ALL RIGHT RESERVED.
        </div>
      </div>
      <div className={styles['footer-sponsor-section']}>
        <div className={styles['footer-sponsor-section__icon']}>
          <a
            href="https://www.koreatech.ac.kr/kor/"
            rel="noreferrer"
            target="_blank"
          >
            <KoreatechIcon />
          </a>
          <a
            href="https://www.koreatech.ac.kr/ide/"
            rel="noreferrer"
            target="_blank"
          >
            <IdeIcon />
          </a>
          <a
            href="https://lincthree.nrf.re.kr/#/"
            rel="noreferrer"
            target="_blank"
          >
            <LincIcon />
          </a>
          <a href="https://www.dscu.ac.kr/" rel="noreferrer" target="_blank">
            <DscIcon />
          </a>
          <SmartHumanInterfaceIcon />
          <a href="https://seedkeeper.kr/" rel="noreferrer" target="_blank">
            <SeedkeeperIcon />
          </a>
        </div>
        <div className={styles['footer-sponsor-section__sns']}>
          <a
            href="https://www.instagram.com/2024_ide_graduation?igsh=MW9lemdpYnRhZDhxYg==&utm_source=qr"
            rel="noreferrer"
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.youtube.com/@IDE_graduation"
            rel="noreferrer"
            target="_blank"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </div>
  );
}
